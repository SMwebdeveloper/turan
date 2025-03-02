import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://turonproject-production.up.railway.app/api/v1",
     prepareHeaders: (headers, { getState }) => {
      const state = getState()  
      const token = state
      console.log(token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // login 
    login: builder.mutation({
        query: (credentials) => ({
            url: "/auth/login"
        })
    })
  }),
});


export const {} = apiSlice
