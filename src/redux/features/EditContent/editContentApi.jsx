const { api } = require("@/redux/api/ApiSlice");

const editContentApi=api.injectEndpoints({
  endpoints: (builder) => ({




    GetHomeContent:builder.query({
      query: () => ({
        url: "/content/get-home-content",
      }),
    providesTags:["homeContent"]
    }),
    GetAboutContent:builder.query({
      query: () => ({
        url: "/content/get-about-content",
      }),
    providesTags:["aboutcontent"]
    }),




  
    


  }),
});

export const {useGetAboutContentQuery,useGetHomeContentQuery} = editContentApi;