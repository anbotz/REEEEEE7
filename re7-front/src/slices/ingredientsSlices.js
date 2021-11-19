import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    set: (state, action) => [...action.payload],
    add: (state, action) => [...state, action.payload],
    reset: (state) => initialState,
  },
});

export const { add, reset, set } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
