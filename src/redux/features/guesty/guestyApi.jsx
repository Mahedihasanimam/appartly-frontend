import { api } from "@/redux/api/ApiSlice";

const clientId = '0oalpu0v1hU6mOKEh5d7';
const clientSecret = '1FEi6to_WlqJ9-ly3IEmbjtQ866XP5HpvVAC0Etwmd8bKRUB5wk-t05_a0HKV-VB';

async function fetchAccessToken() {
  const response = await fetch('https://booking.guesty.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }).toString(),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error('Token Fetch Error:', errorDetails);
    throw new Error(`Failed to fetch access token: ${errorDetails.error_description || response.statusText}`);
  }

  const data = await response.json();

  // Store the access token and expiration time in localStorage
  if (data.access_token) {
    localStorage.setItem('guesty_access_token', data.access_token);
    localStorage.setItem('guesty_token_expiry', Date.now() + data.expires_in * 1000); // Store expiry time
  }

  return data.access_token;
}

async function getValidToken() {
  const token = localStorage.getItem('guesty_access_token');
  const expiryTime = localStorage.getItem('guesty_token_expiry');

  // Check if token is missing or expired
  if (!token || (expiryTime && Date.now() > expiryTime)) {
    // Fetch a new token
    return await fetchAccessToken();
  }

  return token;
}

export const guestyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to get guesty properties
    getGuestyProperties: builder.query({
      queryFn: async () => {
        try {
          const token = await getValidToken();
          const response = await fetch('https://booking.guesty.com/api/listings', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            return { error: { status: response.status, data: await response.text() } };
          }

          const data = await response.json();
          return { data };
        } catch (error) {
          return { error: { status: 500, message: error.message } };
        }
      },
      providesTags: ['Properties'],
    }),

    // Endpoint to create a reservation
    createGuestyReservation: builder.mutation({
      queryFn: async (reservationData) => {
        try {
          const token = await getValidToken();
          const response = await fetch('https://booking.guesty.com/api/reservations', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
          });

          if (!response.ok) {
            return { error: { status: response.status, data: await response.text() } };
          }

          const data = await response.json();
          return { data };
        } catch (error) {
          return { error: { status: 500, message: error.message } };
        }
      },
      invalidatesTags: ['reservation'],
    }),
  }),
});

export const {
  useGetGuestyPropertiesQuery,
  useCreateGuestyReservationMutation,
} = guestyApi;
