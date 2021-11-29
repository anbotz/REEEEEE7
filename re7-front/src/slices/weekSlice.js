import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filledMeals: 0,
  lines: [
    {
      name: 'Petit-Déjeuner',
      isActive: false,
      isFullfilled: false,
      days: [
        { day: 'lundi', isChoose: false },
        { day: 'mardi', isChoose: false },
        { day: 'mercredi', isChoose: false },
        { day: 'jeudi', isChoose: false },
        { day: 'vendredi', isChoose: false },
        { day: 'samedi', isChoose: false },
        { day: 'dimanche', isChoose: false },
      ],
    },
    {
      name: 'Déjeuner',
      isActive: true,
      isFullfilled: false,
      days: [
        { day: 'lundi', isChoose: false },
        { day: 'mardi', isChoose: false },
        { day: 'mercredi', isChoose: false },
        { day: 'jeudi', isChoose: false },
        { day: 'vendredi', isChoose: false },
        { day: 'samedi', isChoose: false },
        { day: 'dimanche', isChoose: false },
      ],
    },
    {
      name: 'Repas',
      isActive: true,
      isFullfilled: false,
      days: [
        { day: 'lundi', isChoose: false },
        { day: 'mardi', isChoose: false },
        { day: 'mercredi', isChoose: false },
        { day: 'jeudi', isChoose: false },
        { day: 'vendredi', isChoose: false },
        { day: 'samedi', isChoose: false },
        { day: 'dimanche', isChoose: false },
      ],
    },
  ],
};
export const weekSlice = createSlice({
  name: 'week',
  initialState,
  reducers: {
    addFilledMeals: (state) => ({ ...state, filledMeals: state.filledMeals + 1 }),
    removeFilledMeals: (state) => ({ ...state, filledMeals: state.filledMeals - 1 }),
    setDays: (state, action) => {
      const { indexLine, index } = action.payload.cellCouple;

      state.lines[indexLine].days[index] = {
        ...state.lines[indexLine].days[index],
        ...action.payload.recipe,
        isChoose: true,
      };
      return state;
    },
    setActive: (state, action) => {
      const { indexLine } = action.payload;
      state.lines[indexLine].isActive = !state.lines[indexLine].isActive;

      return state;
    },
    resetDays: (state, action) => {
      const { indexLine, index } = action.payload.cellCouple;
      state.lines[indexLine].days[index] = {
        day: state.lines[indexLine].days[index].day,
        isChoose: false,
      };
      return state;
    },
    setFullfilled: (state, action) => {
      const { indexLine } = action.payload;
      state.lines[indexLine].isFullfilled = true;

      return state;
    },
    reset: (state) => initialState,
  },
});

export const { reset, addFilledMeals, removeFilledMeals, setDays, setActive, resetDays, setFullfilled } =
  weekSlice.actions;

export default weekSlice.reducer;
