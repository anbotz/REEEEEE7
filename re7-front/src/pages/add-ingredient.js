import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledPage, StyledTitle, EMOJI } from '../styled-components';
import { createIngredient } from '../services/ingredientsRoute';

const UNIT = ['unité', 'gramme', 'litre', 'boite', 'autres'];

const AddIngredientPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { name: '', unit: UNIT[0] },
  });

  const onSubmit = (data) => {
    createIngredient(data);
  };

  return (
    <StyledPage>
      <StyledTitle>
        <img src={EMOJI.BANANA} width="50" alt="banana" />
        Ajout d'un ingrédient
        <img src={EMOJI.BANANA} width="50" alt="banana" />
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nom" {...register('name')} />
        <select placeholder="Unité" {...register('unit')}>
          {UNIT.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <button>Ajouter l'ingrédient</button>
      </StyledForm>
    </StyledPage>
  );
};

export default AddIngredientPage;
