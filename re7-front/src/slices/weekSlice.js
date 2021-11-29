import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filledMeals: 0,
  lines: [
    { name: 'Petit-Déjeuner', days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] },
    { name: 'Déjeuner', days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] },
    { name: 'Repas', days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] },
  ],
};
export const weekSlice = createSlice({
  name: 'week',
  initialState,
  reducers: {
    set: (state, action) => ({ ...action.payload }),
    addFilledMeals: (state) => ({ ...state, filledMeals: state.filledMeals + 1 }),
    removeFilledMeals: (state) => ({ ...state, filledMeals: state.filledMeals - 1 }),

    reset: (state) => initialState,
  },
});

export const { reset, addFilledMeals, removeFilledMeals, set } = weekSlice.actions;

export default weekSlice.reducer;
