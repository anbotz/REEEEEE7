import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { StyledForm, StyledPage } from "../styled-components";
import styled from "styled-components";
import { getAllIngredients } from "../services/ingredientsRoute";
import { set } from "../slices/ingredientsSlices"
import { createRecipe } from "../services/recipesRoute";

const AddButton = styled.div`
    border: 1px solid black;
    display: flex;
    padding: 5px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const AddRecipePage = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ingredientNumber, setIngredientNumber] = useState(1);
    const ingredientChoices = useSelector((state) => state.ingredients);

    useEffect(() => {
        getAllIngredients()
            .then((res) => dispatch(set(res)))
    }, [dispatch])

    const { register, handleSubmit } = useForm({
        defaultValues: { name: "", ingredients: [], directions: '' },
    });

    const onSubmit = (data) => {
        console.log(data)
        createRecipe(data)
        // navigate("/")
    };

    return (
        <StyledPage>
            <h1>Ajout d'une recette</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Nom" {...register("name")} />
                {[...Array(ingredientNumber).keys()].map((i) =>
                    <StyledRow key={i}>
                        <select placeholder="Liste des ingrédients" {...register(`ingredients[${i}].name`)}>
                            {ingredientChoices.map(choice =>
                                <option key={choice._id} value={choice.name}>{choice.name} ({choice.unit})</option>
                            )}
                        </select>
                        <input placeholder="Quantité" {...register(`ingredients[${i}].quantity`)}></input>

                    </StyledRow>)}
                <StyledRow>
                    <AddButton onClick={() => setIngredientNumber(ingredientNumber + 1)}>+</AddButton>
                    <AddButton onClick={() => setIngredientNumber(ingredientNumber - 1)}>-</AddButton>
                </StyledRow>
                <textarea placeholder="Etapes à suivre (faculatif)" {...register("directions")} />
                <button>Ajouter la recette</button>
            </StyledForm>
        </StyledPage >
    );
}

export default AddRecipePage;