import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { StyledPage, EMOJI, StyledClickableImg, StyledTitle } from '../styled-components';
import { deleteRecipe } from '../services/recipesRoute';
import styled from 'styled-components';

const SurStyledTitle = styled(StyledTitle)`
  flex: 1;
`;

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

  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <StyledPage>
      <StyledTopSection>
        <div />
        <SurStyledTitle> {recipe.name}</SurStyledTitle>
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
        {recipe?.ingredients.map((ingredient) => (
          <li>
            {ingredient.name}/{ingredient.quantity}
          </li>
        ))}
      </StyledIngredientList>
      <StyledTitle2>Préparation : </StyledTitle2>
      <StyledDirections> {recipe.directions}</StyledDirections>
    </StyledPage>
  );
};

export default RecipePage;
