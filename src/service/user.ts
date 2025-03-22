import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "./admin";

export const userApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => "/statistics/",
    }),
    getTeachers: builder.query({
      query: () => "/teachers/",
    }),
    getResults: builder.query({
      query: () => "/students/",
    }),
    getEvents: builder.query({
      query: () => '/events/'
    }),
    getAbout: builder.query({
        query: () => '/about/'
    })
  }),
});

export const {
    useGetAboutQuery,
    useGetEventsQuery,
    useGetResultsQuery,
    useGetStatisticsQuery,
    useGetTeachersQuery,
} = userApiSlice;
