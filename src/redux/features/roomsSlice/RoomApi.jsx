const { api } = require("@/redux/api/ApiSlice");

const userApi=api.injectEndpoints({
  endpoints: (builder) => ({
    getRooms:builder.query({
      query: () => ({
        url: "/property/get-all-properties",
        method: "GET",
      }),
    }),

   
  }),
});

export const { useGetRoomsQuery } = userApi;