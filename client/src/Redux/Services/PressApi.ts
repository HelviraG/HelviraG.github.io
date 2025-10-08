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
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    listPressArticles: builder.query<{ press: PressArticle[] }, void>({
       query: () => "database/app/press.json",
    }),
  }),
});

export const { useListPressArticlesQuery } = pressApi;
