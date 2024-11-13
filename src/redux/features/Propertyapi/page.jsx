const { api } = require("@/redux/api/ApiSlice");

const AddPropertyApi=api.injectEndpoints({
  endpoints: (builder) => ({
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

    getAllReviewByPropertyId:builder.query({
      query: (id) => ({
        url: `/review/review-by-property/${id}`,
        method:'GET'
      }),
  
    }),



  
    


  }),
});

export const {useAddAPropertyMutation,useGetRoomsQuery,useGetRoomsByIdQuery,useAddReviewRatingsMutation,useGetAllReviewByPropertyIdQuery } = AddPropertyApi;