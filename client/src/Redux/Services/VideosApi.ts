import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Video {
  channel: string;
  channelImg: string;
  title: string;
  tags: string[];
  imgUrl: string;
  lightColor: string;
  darkColor: string;
  link?: string;
}

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    listVideos: builder.query<{ videos: Video[] }, void>({
      query: () => ({
        url: `/getVideos`,
        method: "GET",
      }),
    }),
  }),
});

export const { useListVideosQuery } = videosApi;
