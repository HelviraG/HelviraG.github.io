import { IEvent } from "@/App/Resources/Pages/General/ConferencesResource";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Conference {
  lang: string;
  abstract: string;
  cover: any;
  id: number;
  place: string;
  month: string;
  location: string;
  day: string;
  tags: string;
  title: string;
  link: string;
  year: string;
  imgUrl: string;
  events: IEvent[];
}

export const conferencesApi = createApi({
  reducerPath: "conferencesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    listConferences: builder.query<{ conferences: Conference[] }, void>({
       query: () => "database/app/conferences.json",
    }),
    showConference: builder.query<Conference | undefined, number>({
      query: () => "database/app/conferences.json",
      transformResponse: (response: { conferences: Conference[] }, meta, arg) => {
        return response.conferences.find((conference) => conference.id === arg);
      },
    }),
  }),
});

export const { useListConferencesQuery, useShowConferenceQuery } = conferencesApi;
