import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Answer {
  questionId: string;
  answer: string;
}

interface QuizResult {
  counts: {
    citizen: string;
    paladin: string;
    superMutant: string
  },
  percentages: {
    citizen: string;
    paladin: string;
    superMutant: string
  },
  results: [
    { 
      category: string;
      type: string
    }
  ],
  total: number
}

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    storeResult: builder.mutation({
      query: (body: { category: string; type: string }) => ({
        url: `/postResult`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
    listResult: builder.query<QuizResult, { category?: string }>({
      query: (arg) => {
        const params = new URLSearchParams();
        if (arg?.category) params.append("category", arg.category);

        return {
          url: `/getResults?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useStoreResultMutation, useListResultQuery } = quizApi;
