const { api } = require("@/redux/api/ApiSlice");

const userApi=api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users/auth/signup",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    socialLogin: builder.mutation({
      query: (user) => ({
        url: "/users/auth/login-social",
        method: "POST",
        body: user,
      }),
    }),
    // getUser: builder.query({
    //   query: (id) => `users/${id}`,
    // }),

  }),
});

export const { useRegisterUserMutation, useLoginUserMutation,useSocialLoginMutation } = userApi;