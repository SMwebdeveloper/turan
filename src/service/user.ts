import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { api } from "./admin";

export const userApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: api,
    }),
    endpoints: (builder) => ({
        getUserStatistics: builder.query({
            query: () => "/statistics"
        })
    })
})