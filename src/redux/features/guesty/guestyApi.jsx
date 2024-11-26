import { api } from "@/redux/api/ApiSlice";

const clientId = '0oale3a4k6TiTPKZB5d7';
const clientSecret = 'edKGYEaKDh6viG0Z-TRKoQ6XH1A8J-9aYexH0_SDayZNeNKeVqalTmVPORbvKIR6';

export const guestyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to get access token
    getAccessToken: builder.query({
      query: async () => {
        // Fetch token using clientId and clientSecret
        const response = await fetch('https://open-api.guesty.com/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: clientId,  // Ensure the correct key is used
            client_secret: clientSecret,
            grant_type: 'client_credentials',
          }),
        });

        const data = await response.json();

        // Store the access token and expiration time in localStorage
        if (data.access_token) {
          localStorage.setItem('guesty_access_token', data.access_token);
          localStorage.setItem('guesty_token_expiry', Date.now() + data.expires_in * 1000); // Store expiry time
        }

        return data;
      },
      providesTags: ['user'], // Tag for revalidation
    }),

    // Endpoint to get guesty properties
    getGuestyProperties: builder.query({
      query: () => {
        const token = localStorage.getItem('guesty_access_token');
        const expiryTime = localStorage.getItem('guesty_token_expiry');

        // Check if the token has expired
        if (expiryTime && Date.now() > expiryTime) {
          // Token expired, trigger a refresh
          return { type: 'getAccessToken' };
        }

        return {
          url: 'https://open-api.guesty.com/v1/listings',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Use token from localStorage
          },
        };
      },
      providesTags: ['Properties'], // Cache invalidation
    }),

    // Endpoint to create a reservation
    createGuestyReservation: builder.mutation({
      query: (reservationData) => {
        const token = localStorage.getItem('guesty_access_token');
        const expiryTime = localStorage.getItem('guesty_token_expiry');

        // Check if the token has expired
        if (expiryTime && Date.now() > expiryTime) {
          // Token expired, trigger a refresh
          return { type: 'getAccessToken' };
        }

        return {
          url: 'https://open-api.guesty.com/v1/reservations',
          method: 'POST',
          body: reservationData,
          headers: {
            'Authorization': `Bearer ${token}`, // Use token from localStorage
          },
        };
      },
      invalidatesTags: ['reservation'], // Cache invalidation
    }),
  }),
});

export const {
  useGetAccessTokenQuery,
  useGetGuestyPropertiesQuery,
  useCreateGuestyReservationMutation,
} = guestyApi;
