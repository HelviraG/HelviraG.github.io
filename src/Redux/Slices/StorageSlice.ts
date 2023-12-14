import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AppState {
    language: string;
}

const initialState: AppState = {
    language: ''
};

export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        setAppLang: (state, action) => {
            state.language = action.payload.lang;
            localStorage.setItem(action.payload.key, JSON.stringify(action.payload.lang));
        },
    },
    // extraReducers: (builder) => {},
});

export default storageSlice.reducer;

export const { setAppLang } = storageSlice.actions;

export const storageState = (state: RootState) => state.storage;