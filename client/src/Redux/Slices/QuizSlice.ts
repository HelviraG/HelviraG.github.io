import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

// --- Helpers for safe localStorage access ---
const STORAGE_KEYS = {
  answers: "FALLOUT_ON_PASSION",
  field: "FALLOUT_PASSION_FIELD",
  username: "FALLOUT_ON_PASSION_USERNAME",
};

const safeLoadArray = (key: string): Answer[] => {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const safeLoadString = (key: string): string | null => {
  try {
    const value = window.localStorage.getItem(key);
    return value ?? null;
  } catch {
    return null;
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
  answers: safeLoadArray(STORAGE_KEYS.answers),
  field: safeLoadString(STORAGE_KEYS.field),
  userName: safeLoadString(STORAGE_KEYS.username),
};

// --- Slice ---
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    storeAnswers: (
      state,
      action: PayloadAction<{ questionId: string; answer: string }>
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

    getPassionField: (state) => {
      state.field = safeLoadString(STORAGE_KEYS.field);
    },

    getUserNameField: (state) => {
      state.userName = safeLoadString(STORAGE_KEYS.username);
    },

    resetAnswers: (state) => {
      state.answers = [];
      safeSave(STORAGE_KEYS.answers, []);
    },
  },
});

// --- Exports ---
export default quizSlice.reducer;

export const {
  storeAnswers,
  resetAnswers,
  listAnswers,
  getPassionField,
  getUserNameField,
} = quizSlice.actions;

// --- Selectors ---
export const showField = (state: RootState) => state.quiz.field;
export const showUserName = (state: RootState) => state.quiz.userName;
export const listAllAnswers = (state: RootState) => state.quiz.answers;

export const showLastAnswer = (state: RootState) =>
  state.quiz.answers.length > 0
    ? state.quiz.answers[state.quiz.answers.length - 1]
    : null;

export const quizState = (state: RootState) => state.quiz;
