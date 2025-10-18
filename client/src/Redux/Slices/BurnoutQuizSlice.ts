import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BurnoutAnswer {
  questionId: string;
  answer: number;
}

interface QuizState {
  answers: BurnoutAnswer[];
}

// --- Helpers for safe localStorage access ---
const STORAGE_KEYS = {
  answers: "BURNOUT_QUIZ",
};

const safeLoadArray = (key: string): BurnoutAnswer[] => {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const safeSave = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error("Failed to save", key);
  }
};

// --- Initial state ---
const initialState: QuizState = {
  answers: safeLoadArray(STORAGE_KEYS.answers)
};

// --- Slice ---
export const burnoutSlice = createSlice({
  name: "burnoutQuiz",
  initialState,
  reducers: {
    storeAnswers: (
      state,
      action: PayloadAction<{ questionId: string; answer: number }>
    ) => {
      const { questionId, answer } = action.payload;

      if (!Array.isArray(state.answers)) {
        state.answers = [];
      }

      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === questionId
      );

      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex].answer = answer;
      } else {
        state.answers.push({ questionId, answer });
      }

      safeSave(STORAGE_KEYS.answers, state.answers);
    },

    listAnswers: (state) => {
      state.answers = safeLoadArray(STORAGE_KEYS.answers);
    },

    resetAnswers: (state) => {
      state.answers = [];
      safeSave(STORAGE_KEYS.answers, []);
    },
  },
});

// --- Exports ---
export default burnoutSlice.reducer;

export const {
  storeAnswers,
  resetAnswers,
  listAnswers,
} = burnoutSlice.actions;

// --- Selectors ---
export const listBurnoutAnswers = (state: RootState) => state.burnoutQuiz.answers;

export const showLastAnswer = (state: RootState) =>
  state.burnoutQuiz.answers.length > 0
    ? state.burnoutQuiz.answers[state.burnoutQuiz.answers.length - 1]
    : null;

export const burnoutQuizState = (state: RootState) => state.burnoutQuiz;
