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
      invalidatesTags: ["teachers"]
    }),

    // results
    getResults: builder.query({
      query: () => '/admin/results'
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
  useUploadImageMutation,
  useGetTeacherByIdQuery,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = apiSlice;
