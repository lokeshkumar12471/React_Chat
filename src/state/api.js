import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (bulid) => ({
    postAiText: bulid.mutation({
      query: (payload) => ({
        url: "openai/text",
        method: "POST",
        BODY: payload,
      }),
    }),

    postAiCode: bulid.mutation({
      query: (payload) => ({
        url: "openai/code",
        method: "POST",
        BODY: payload,
      }),
    }),
  }),
});

export const { usePostAiTextMutation, usePostAiCodeMutation } = api;
