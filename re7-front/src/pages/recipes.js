import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllRecipes } from '../services/recipesRoute';
import { set } from '../slices/recipesSlice';
import { StyledPage, EMOJI } from '../styled-components';

const StyledRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const StyledRecipe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  width: 200px;
`;

const StyledName = styled.div`
  border: 1px solid black;
  text-align: center;
`;

const RecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    getAllRecipes().then((res) => dispatch(set(res)));
  }, [dispatch]);

  return (
    <StyledPage>
      <h1>Recettes</h1>
      <StyledRecipes>
        {recipes.map((recipe) => (
          <StyledRecipe key={recipe._id}>
            <img src={EMOJI.DISHWARE} width="100" alt="disware" />
            <StyledName>{recipe.name}</StyledName>
          </StyledRecipe>
        ))}
      </StyledRecipes>
    </StyledPage>
  );
};

export default RecipesPage;
