import React from "react";
import { StyledPage } from "../styled-components";

const recipe1 = { name: "bf", ingredient: "sf", directions: 'sf' }

const RecipesPage = () => {
    const recipes = [recipe1, recipe1, recipe1];
    return (
        <StyledPage>
            <h1>Recettes</h1>
            {recipes.map((recipe, index) => <div>{recipe1.name}</div>)}
        </StyledPage>
    )
}

export default RecipesPage;