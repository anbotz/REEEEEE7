
import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./slices/recipesSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
        recipes: recipesSlice,
        user: userSlice
    },
});