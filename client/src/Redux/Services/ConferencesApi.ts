import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Conference {
  place: string;
  month: string;
  location: string;
  day: string;
  tags: string;
  title: string;
  link: string;
  year: string;
  imgUrl: string;
}

export const conferencesApi = createApi({
  reducerPath: "conferencesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    listConferences: builder.query<{ conferences: Conference[] }, void>({
      query: () => ({
        url: `/getConfs`,
        method: "GET",
      }),
    }),
  }),
});

export const { useListConferencesQuery } = conferencesApi;
