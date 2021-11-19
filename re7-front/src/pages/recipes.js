import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { getAllRecipes } from '../services/recipesRoute';
import { set } from '../slices/recipesSlice';
import { StyledPage, StyledTitle, EMOJI, COLOR } from '../styled-components';

const StyledRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const StyledRecipe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;

  width: 200px;
  cursor: pointer;
  :hover {
    background-color: #${COLOR.GAMBODE};
    color: white;
  }
`;

const RecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const navigate = useNavigate();

  useEffect(() => {
    getAllRecipes().then((res) => dispatch(set(res)));
  }, [dispatch]);

  return (
    <StyledPage>
      <StyledRecipes>
        {recipes.map((recipe) => (
          <StyledRecipe key={recipe._id} onClick={() => navigate(`/recipe/${recipe._id}`, { state: { recipe } })}>
            <img src={EMOJI.DISHWARE} width="100" alt="disware" />
            <StyledTitle>{recipe.name}</StyledTitle>
          </StyledRecipe>
        ))}
      </StyledRecipes>
    </StyledPage>
  );
};

export default RecipesPage;
