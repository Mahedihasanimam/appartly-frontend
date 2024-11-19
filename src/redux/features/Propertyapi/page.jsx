const { api } = require("@/redux/api/ApiSlice");

const AddPropertyApi=api.injectEndpoints({
  endpoints: (builder) => ({


    addAProperty: builder.mutation({
      query: (data) => ({
        url: "/property/add-property",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Properties"],
    }),


    addReviewRatings: builder.mutation({
      query: (data) => ({
        url: "/review/add-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviewRating"],
    }),

    addRatings: builder.mutation({
      query: (data) => ({
        url: "/rating/add-rating",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ratings"],
    }),







    getRooms:builder.query({
      query: () => ({
        url: "/property/get-all-properties",
      }),
    providesTags:["Properties"]
    }),



    getRoomsById:builder.query({
      query: (id) => ({
        url: `/property/get-property-by-id/${id}`,
        method:'GET'
      }),
      providesTags:["reviewRating"]
  
    }),

    getAllReviewByPropertyId:builder.query({
      query: (id) => ({
        url: `/review/review-by-property/${id}`,
        method:'GET'
      }),
    }),


    getRatingsByPropertyId:builder.query({
      query: (id) => ({
        url: `/rating/rating-by-property/${id}`,
        method:'GET'
      }),
    }),
    logdinuserReservation:builder.query({
      query: () => ({
        url: `/reservation/get-reservation-by-user`,
        method:'GET'
      }),
      providesTags:['bookingList']
    }),



  
    


  }),
});

export const {useAddAPropertyMutation,useGetRoomsQuery,useGetRoomsByIdQuery,useAddReviewRatingsMutation,useGetAllReviewByPropertyIdQuery,useAddRatingsMutation,useGetRatingsByPropertyIdQuery,useLogdinuserReservationQuery } = AddPropertyApi;