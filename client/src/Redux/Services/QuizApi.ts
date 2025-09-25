import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Answer {
  questionId: string;
  answer: string;
}

interface QuizState {
  answers: Answer[];
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
  }),
});

export const { useStoreResultMutation } = quizApi;
