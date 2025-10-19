import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TechSkillsAnswer {
  questionId: string;
  optionId: number;
  answer: number;
}

interface QuizState {
  answers: TechSkillsAnswer[];
}

// --- Helpers for safe localStorage access ---
const STORAGE_KEYS = {
  answers: "TECH_SKILLS_QUIZ",
};

const safeLoadArray = (key: string): TechSkillsAnswer[] => {
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
export const techSkillsSlice = createSlice({
  name: "techSkillsQuiz",
  initialState,
  reducers: {
    storeAnswers: (
      state,
      action: PayloadAction<{ questionId: string; optionId: number; answer: number }>
    ) => {
      const { questionId, optionId, answer } = action.payload;

      if (!Array.isArray(state.answers)) {
        state.answers = [];
      }

      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === questionId
      );

      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex].answer = answer;
        state.answers[existingAnswerIndex].optionId = optionId;
      } else {
        state.answers.push({ questionId, optionId, answer });
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
export default techSkillsSlice.reducer;

export const {
  storeAnswers,
  resetAnswers,
  listAnswers,
} = techSkillsSlice.actions;

// --- Selectors ---
export const listTechSkillsAnswers = (state: RootState) => state.techSkillsQuiz.answers;

export const showLastAnswer = (state: RootState) =>
  state.techSkillsQuiz.answers.length > 0
    ? state.techSkillsQuiz.answers[state.techSkillsQuiz.answers.length - 1]
    : null;

export const techSkillsQuizState = (state: RootState) => state.techSkillsQuiz;
