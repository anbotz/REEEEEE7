import { configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredientsSlices';
import recipesSlice from './slices/recipesSlice';
import userSlice from './slices/userSlice';
import weekSlice from './slices/weekSlice';

export default configureStore({
  reducer: {
    recipes: recipesSlice,
    user: userSlice,
    ingredients: ingredientsSlice,
    week: weekSlice,
  },
});
