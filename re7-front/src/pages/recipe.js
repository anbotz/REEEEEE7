import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { StyledPage, EMOJI, StyledClickableImg, StyledTitle } from '../styled-components';
import { deleteRecipe } from '../services/recipesRoute';
import styled from 'styled-components';
import { getAllIngredients } from '../services/ingredientsRoute';

const StyledTopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 5px;
  justify-items: center;
  width: 100%;
`;
const StyledActionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const StyledIngredientList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;
`;

const StyledTitle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;

  font-size: 1em;
  text-transform: uppercase;
  font-family: 'Rockbubble';
`;

const StyledDirections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;
`;

const RecipePage = () => {
  const {
    state: { recipe },
  } = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [surchargedRecipe, setSurchargedRecipe] = useState(recipe);

  useEffect(() => {
    getAllIngredients().then((res) => {
      const surchargedIngredients = recipe.ingredients.reduce((acc, ing) => {
        const { unit } = res.find((ingr) => ingr.name === ing.name);
        return [...acc, { ...ing, unit }];
      }, []);

      setSurchargedRecipe({ ...recipe, ingredients: surchargedIngredients });
    });
  }, [dispatch, recipe]);

  return (
    <StyledPage>
      <StyledTopSection>
        <div />
        <StyledTitle> {surchargedRecipe.name}</StyledTitle>
        <StyledActionBar>
          {isAdmin && (
            <StyledClickableImg
              src={EMOJI.UPDATE}
              width="20"
              alt="update"
              title="Modifier"
              onClick={() => {
                navigate(`/update-recipe/${recipe._id}`, { state: { recipe } });
              }}
            />
          )}
          {isAdmin && (
            <StyledClickableImg
              src={EMOJI.DELETE}
              width="20"
              alt="delete"
              title="Supprimer"
              onClick={() => {
                deleteRecipe(recipe._id);
                navigate(-1);
              }}
            />
          )}
        </StyledActionBar>
      </StyledTopSection>
      <StyledTitle2>Ingrédients : </StyledTitle2>
      <StyledIngredientList>
        {surchargedRecipe?.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} : {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </StyledIngredientList>
      <StyledTitle2>Préparation : </StyledTitle2>
      <StyledDirections> {surchargedRecipe.directions}</StyledDirections>
    </StyledPage>
  );
};

export default RecipePage;
