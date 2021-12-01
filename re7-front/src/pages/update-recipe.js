import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { StyledForm, StyledPage, StyledTitle, EMOJI, StyledErrorList } from '../styled-components';
import styled from 'styled-components';
import { getAllIngredients } from '../services/ingredientsRoute';
import { set } from '../slices/ingredientsSlices';
import { updateRecipe } from '../services/recipesRoute';
import { useLocation, useNavigate, useParams } from 'react-router';

const AddButton = styled.div`
  border: 1px solid black;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UpdateRecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    state: { recipe },
  } = useLocation();

  const [ingredientNumber, setIngredientNumber] = useState(recipe.ingredients.length);
  const ingredientChoices = useSelector((state) => state.ingredients);

  useEffect(() => {
    getAllIngredients().then((res) => dispatch(set(res)));
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: recipe.name,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
    },
  });

  const onSubmit = (data) => {
    updateRecipe(data, id);
  };

  return (
    <StyledPage>
      <StyledTitle>
        <img src={EMOJI.DISHWARE} width="50" alt="dishware" />
        Modifier la recette
        <img src={EMOJI.DISHWARE} width="50" alt="dishware" />
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nom" {...register('name', { required: true })} />
        {[...Array(ingredientNumber).keys()].map((i) => (
          <StyledRow key={i}>
            <select placeholder="Liste des ingrédients" {...register(`ingredients[${i}].name`)}>
              {ingredientChoices.map((choice) => (
                <option key={choice._id} value={choice.name}>
                  {choice.name} ({choice.unit})
                </option>
              ))}
            </select>
            <input
              placeholder="Quantité"
              {...register(`ingredients[${i}].quantity`)}
              value={recipe.ingredients[i].quantity}
            />
          </StyledRow>
        ))}
        <StyledRow>
          <AddButton onClick={() => setIngredientNumber(ingredientNumber + 1)}>+</AddButton>
          <AddButton onClick={() => setIngredientNumber(ingredientNumber - 1)}>-</AddButton>
        </StyledRow>
        <textarea placeholder="Etapes à suivre (faculatif)" {...register('directions')} />
        <StyledErrorList>{errors.name?.type === 'required' && <div>Nom requis</div>}</StyledErrorList>
        <button type="submit">Modifier la recette</button>
        <button type="cancel" onClick={() => navigate(-1)}>
          Annuler
        </button>
      </StyledForm>
    </StyledPage>
  );
};

export default UpdateRecipePage;
