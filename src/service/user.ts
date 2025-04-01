import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "./admin";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ["request"],
  endpoints: (builder) => ({
    // statistics
    getStatistics: builder.query({
      query: () => "/statistics/",
    }),
    // teachers
    getTeachers: builder.query({
      query: () => "/teachers/",
    }),
    // results
    getResults: builder.query({
      query: () => "/students/",
    }),
    // events
    getEvents: builder.query({
      query: () => '/events/'
    }),
    // about
    getAbout: builder.query({
        query: () => '/about-us/'
    }),
    // course
    getCourses: builder.query({
      query: () => '/courses/' 
    }),
    // request
    createRequest: builder.mutation({
      query: (data) => ({
        url: "/send/request",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["request"]
    })
  }),
});

export const {
    useGetAboutQuery,
    useGetEventsQuery,
    useGetResultsQuery,
    useGetStatisticsQuery,
    useGetTeachersQuery,
    useGetCoursesQuery,
    useCreateRequestMutation
} = userApiSlice;
