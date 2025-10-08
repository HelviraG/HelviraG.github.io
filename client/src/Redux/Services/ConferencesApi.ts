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
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    listConferences: builder.query<{ conferences: Conference[] }, void>({
       query: () => "database/app/conferences.json",
    }),
  }),
});

export const { useListConferencesQuery } = conferencesApi;
