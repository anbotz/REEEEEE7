import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { deleteRecipe, getAllRecipes } from '../services/recipesRoute';
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
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  & img {
    cursor: pointer;
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
      <h1>Recettes</h1>
      <StyledRecipes>
        {recipes.map((recipe) => (
          <StyledRecipe key={recipe._id}>
            <img src={EMOJI.DISHWARE} width="100" alt="disware" />
            <StyledName>
              {recipe.name}
              <img
                src={EMOJI.UPDATE}
                width="20"
                alt="update"
                title="Modifier"
                onClick={() => {
                  navigate(`/update-recipe/${recipe._id}`);
                }}
              />
              <img
                src={EMOJI.DELETE}
                width="20"
                alt="delete"
                title="Supprimer"
                onClick={() => {
                  deleteRecipe(recipe._id);
                  getAllRecipes().then((res) => dispatch(set(res)));
                }}
              />
            </StyledName>
          </StyledRecipe>
        ))}
      </StyledRecipes>
    </StyledPage>
  );
};

export default RecipesPage;
