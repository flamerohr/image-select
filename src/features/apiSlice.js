import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://cully-api.herokuapp.com" }),
  endpoints: (builder) => ({
    images: builder.query({
      query: () => "/images",
      transformResponse: ({ data }) => data,
    }),
    imageFaces: builder.query({
      query: (imageId) => `/images/${imageId}/faces`,
      transformResponse: ({ data }) => data,
    }),
  }),
});

export const { useImagesQuery, useImageFacesQuery } = apiSlice;
