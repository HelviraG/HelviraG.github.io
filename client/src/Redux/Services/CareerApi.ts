import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Career {
  anchor: string;
  company: string;
  companyImg: string;
  companyType: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  durationNumber: string;
  durationFrame: string;
  position: string;
  missions: string[];
  technos: string[];
  lightColor: string;
  darkColor: string;
  link?: string;
}

export const careerApi = createApi({
  reducerPath: "careerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    listCareer: builder.query<{ career: Career[] }, void>({
      query: () => ({
        url: `/getCareer`,
        method: "GET",
      }),
    }),
  }),
});

export const { useListCareerQuery } = careerApi;
