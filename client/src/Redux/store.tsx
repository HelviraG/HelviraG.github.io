import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import StorageSlice from "./Slices/StorageSlice";
import { conferencesApi } from "./Services/ConferencesApi";
import { videosApi } from "./Services/VideosApi";
import { pressApi } from "./Services/PressApi";
import { careerApi } from "./Services/CareerApi";
import { quizSlice } from "./Slices/PassionQuizSlice";
import { quizApi } from "./Services/QuizApi";
import { burnoutSlice } from "./Slices/BurnoutQuizSlice";
import { techSkillsSlice } from "./Slices/TechSkillsQuizSlice";

export const store = configureStore({
    reducer: {
        storage: StorageSlice,
        conferencesApi: conferencesApi.reducer,
        videosApi: videosApi.reducer,
        pressApi: pressApi.reducer,
        careerApi: careerApi.reducer,
        quiz: quizSlice.reducer,
        quizApi: quizApi.reducer,
        burnoutQuiz: burnoutSlice.reducer,
        techSkillsQuiz: techSkillsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(conferencesApi.middleware, videosApi.middleware, pressApi.middleware, careerApi.middleware, quizApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;