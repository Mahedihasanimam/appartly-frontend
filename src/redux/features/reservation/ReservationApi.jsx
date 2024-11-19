const { api } = require("@/redux/api/ApiSlice");

const ReservationApi=api.injectEndpoints({
  endpoints: (builder) => ({
    MakeAreservation: builder.mutation({
      query: (data) => ({
        url: "/reservation/reserve-property",
        method: "POST",
        body: data,
        
      }),
      invalidatesTags:['bookingList']
      
    }),




  
    


  }),
});

export const {useMakeAreservationMutation} = ReservationApi;