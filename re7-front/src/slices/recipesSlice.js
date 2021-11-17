import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        set: (state, action) => [...action.payload],
        add: (state, action) => [...state, action.payload],
        reset: (state) => initialState,
    },
});

export const { add, reset, set } = recipesSlice.actions;

export default recipesSlice.reducer;