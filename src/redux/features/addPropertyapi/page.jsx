const { api } = require("@/redux/api/ApiSlice");

const AddPropertyApi=api.injectEndpoints({
  endpoints: (builder) => ({
    addAProperty: builder.mutation({
      query: (data) => ({
        
        url: "/property/add-property",
        method: "POST",

        body: data,
      }),
    }),
    


  }),
});

export const {useAddAPropertyMutation } = AddPropertyApi;