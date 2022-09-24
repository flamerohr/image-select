import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://cully-api.herokuapp.com" }),
  endpoints: (builder) => ({
    images: builder.query({
      query: () => "/images",
    }),
  }),
});

export const { useImagesQuery } = apiSlice;
