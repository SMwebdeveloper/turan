import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://turonproject-5kl6da.fly.dev/api/v1/",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["statistics", "teachers"],
  endpoints: (builder) => ({
    // login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // statistics
    getStatistics: builder.query({
      query: () => ({
        url: "/admin/statistics/",
      }),
      providesTags: ["statistics"],
    }),
    createStatistics: builder.mutation({
      query: (data) => ({
        url: "/admin/statistics/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["statistics"],
    }),

    // get teachers
    getTeachers: builder.query({
      query: () => "/admin/teachers/",
      providesTags: ["teachers"]
    }),
    addTeachers: builder.mutation({
      query: (data) => ({
        url:"/admin/teachers",
        method:"POST",
        body: data
      }),
     invalidatesTags: ["teachers"]
    })
  }),
});

export const {
  useLoginMutation,
  useGetStatisticsQuery,
  useCreateStatisticsMutation,
  useGetTeachersQuery,
  useAddTeachersMutation
} = apiSlice;
