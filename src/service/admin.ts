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
  tagTypes: [
    "statistics",
    "teachers",
    "students",
    "events",
    "about",
    "request",
    "courses",
  ],
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

    deleteStatistics: builder.mutation({
      query: (id) => ({
        url: `/admin/statistics/${id}/`,
        method: "DELETE",
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
      query: (id) => `teachers/${id}/`,
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
      query: (id) => `/admin/events/${id}/`,
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
        url: `/admin/events/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/admin/events/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["events"],
    }),

    // about
    getAbouts: builder.query({
      query: () => "/admin/about-us/",
      providesTags: ["about"],
    }),
    getAboutById: builder.query({
      query: (id) => `/admin/about-us/${id}/`,
    }),
    createAbout: builder.mutation({
      query: (data) => ({
        url: `/admin/about-us/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),
    updateAbout: builder.mutation({
      query: (data) => ({
        url: `/admin/about-us/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),
    deleteAbout: builder.mutation({
      query: (id) => ({
        url: `/admin/about-us/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["about"],
    }),
    // request
    getRequests: builder.query({
      query: () => "/admin/requests/admin-view/",
      providesTags: ["request"],
    }),
    confirmationRequest: builder.mutation({
      query: (id) => ({
        url: `/admin/requests/${id}/approve/`,
        method: "POST",
      }),
      invalidatesTags: ["request"],
    }),
    // course
    getCourses: builder.query({
      query: () => "/admin/courses/",
      providesTags: ["courses"],
    }),
    getCourseById: builder.query({
      query: (id) => `/admin/courses/${id}/`,
    }),
    createCourse: builder.mutation({
      query: (data) => ({
        url: "/admin/courses/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
    updateCourse: builder.mutation({
      query: (data) => ({
        url: `/admin/courses/${data.id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/admin/courses/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["courses"],
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
  useGetRequestsQuery,
  useConfirmationRequestMutation,
  useDeleteStatisticsMutation,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useUploadImageMutation,
} = apiSlice;
