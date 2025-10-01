import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PressArticle {
  media: string;
  mediaImg: string;
  title: string;
  tags: string[];
  imgUrl: string;
  lightColor: string;
  darkColor: string;
  link?: string;
  writtenBy?: string;
  caption: string;
}

export const pressApi = createApi({
  reducerPath: "pressApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    listPressArticles: builder.query<{ press: PressArticle[] }, void>({
      query: () => ({
        url: `/getPress`,
        method: "GET",
      }),
    }),
  }),
});

export const { useListPressArticlesQuery } = pressApi;
