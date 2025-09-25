import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Answer {
  questionId: string;
  answer: string;
}

interface QuizState {
  answers: Answer[];
  field: string | null;
  userName: string | null;
}

const initialState: QuizState = {
  answers: [],
  field: "",
  userName: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    storeAnswers: (state, action) => {
      const { questionId, answer } = action.payload;
      // Check if the questionId already has an answer
      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === questionId,
      );

      if (existingAnswerIndex >= 0) {
        // Update existing answer
        state.answers[existingAnswerIndex].answer = answer;
      } else {
        // Add new answer
        state.answers.push({ questionId, answer });
      }

      window.localStorage.setItem(
        "FALLOUT_ON_PASSION",
        JSON.stringify(state.answers),
      );
    },
    listAnswers: (state) => {
      const items = window.localStorage.getItem("FALLOUT_ON_PASSION");
      state.answers = items ? JSON.parse(items) : {};
    },

    getPassionField: (state) => {
      state.field = window.localStorage.getItem("FALLOUT_PASSION_FIELD");
    },

    getUserNameField: (state) => {
      state.userName = window.localStorage.getItem(
        "FALLOUT_ON_PASSION_USERNAME",
      );
    },

    // Optional: Add a reset action to clear all answers
    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

export default quizSlice.reducer;

export const {
  storeAnswers,
  resetAnswers,
  listAnswers,
  getPassionField,
  getUserNameField,
} = quizSlice.actions;

export const showField = (state: RootState) => state.quiz.field;
export const showUserName = (state: RootState) => state.quiz.userName;

export const listAllAnswers = (state: RootState) => state.quiz.answers;

export const showLastAnswer = (state: RootState) =>
  state.quiz.answers.length > 0
    ? state.quiz.answers.reduce((acc, current) => current, {})
    : null;

export const quizState = (state: RootState) => state.quiz;
