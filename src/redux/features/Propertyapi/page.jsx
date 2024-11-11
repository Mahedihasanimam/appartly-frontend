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
        url: ` /property/get-property-by-id/${id}` ,
      }),
     providesTags : [
      "Properties"
     ]
    }),
    addAProperty: builder.mutation({
      query: (data) => ({
        url: "/property/add-property",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Properties"],
    }),



  
    


  }),
});

export const {useAddAPropertyMutation,useGetRoomsQuery } = AddPropertyApi;