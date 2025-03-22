import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = "https://turonproject-5kl6da.fly.dev/api/v1/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["statistics", "teachers", "students", "events", "about"],
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
      providesTags: ["teachers"],
    }),
    addTeachers: builder.mutation({
      query: (data) => ({
        url: "/admin/teachers/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teachers"],
    }),

    getTeacherById: builder.query({
      query: (id) => `/admin/teachers/${id}/`,
    }),

    updateTeacher: builder.mutation({
      query: (data) => ({
        url: `/admin/teachers/${data?.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["teachers"],
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/admin/teachers/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["teachers"],
    }),

    // results
    getResults: builder.query({
      query: () => "/admin/students/",
      providesTags: ["students"],
    }),
    getResultsById: builder.query({
      query: (id) => `/admin/students/${id}/`,
    }),
    createResult: builder.mutation({
      query: (data) => ({
        url: "/admin/students/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["students"],
    }),
    updateResult: builder.mutation({
      query: (data) => ({
        url: `/admin/students/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["students"],
    }),
    deleteResults: builder.mutation({
      query: (id) => ({
        url: `/admin/students/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["students"],
    }),
    // events
    getEvents: builder.query({
      query: () => "/admin/events/",
      providesTags: ["events"],
    }),
    getEventById: builder.query({
      query: (id) => `/admin/events/${id}`,
    }),
    createEvents: builder.mutation({
      query: (data) => ({
        url: `/admin/events/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),
    updateEvents: builder.mutation({
      query: (data) => ({
        url: `/admin/events/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/admin/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["events"],
    }),

    // about
    getAbouts: builder.query({
      query: () => "/admin/about/",
      providesTags: ["about"],
    }),
    getAboutById: builder.query({
      query: (id) => `/admin/about/${id}/`,
    }),
    createAbout: builder.mutation({
      query: (data) => ({
        url: `/admin/about/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),
    updateAbout: builder.mutation({
      query: (data) => ({
        url: `/admin/about/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),
    deleteAbout: builder.mutation({
      query: (id) => ({
        url: `/admin/about/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["about"],
    }),
    // upload image
    uploadImage: builder.mutation({
      query: (e) => ({
        url: "/admin/images/upload/",
        method: "POST",
        body: e,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetStatisticsQuery,
  useCreateStatisticsMutation,
  useGetTeachersQuery,
  useAddTeachersMutation,
  useGetTeacherByIdQuery,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
  useGetResultsQuery,
  useGetResultsByIdQuery,
  useCreateResultMutation,
  useDeleteResultsMutation,
  useUpdateResultMutation,
  useGetEventsQuery,
  useGetEventByIdQuery,
  useCreateEventsMutation,
  useUpdateEventsMutation,
  useDeleteEventMutation,
  useGetAboutsQuery,
  useGetAboutByIdQuery,
  useCreateAboutMutation,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
  useUploadImageMutation,
} = apiSlice;
