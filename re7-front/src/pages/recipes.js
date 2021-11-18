import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../services/recipesRoute";
import { set } from "../slices/recipesSlice";
import { StyledPage } from "../styled-components";

const RecipesPage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

    useEffect(() => {
        getAllRecipes()
            .then((res) => dispatch(set(res)))
    }, [dispatch])

    return (
        <StyledPage>
            <h1>Recettes</h1>
            {recipes.map((recipe) => <div key={recipe._id}>{recipe.name}</div>)}
        </StyledPage>
    )
}

export default RecipesPage;