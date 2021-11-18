import React from "react";
import { useForm } from "react-hook-form";
import { StyledForm, StyledPage } from "../styled-components";
import { createIngredient } from "../services/ingredientsRoute";

const UNIT = ['unité', 'gramme', 'litre', 'boite']

const AddIngredientPage = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: { name: "", unit: UNIT[0] },
    });

    const onSubmit = (data) => {
        createIngredient(data);
    };

    return (
        <StyledPage>
            <h1>Ajout d'un ingrédient</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Nom" {...register("name")} />
                <select placeholder="Unité" {...register("unit")}>
                    {UNIT.map(i =>
                        <option key={i} value={i}>{i}</option>
                    )}
                </select>
                <button>Ajouter l'ingrédient</button>
            </StyledForm>
        </StyledPage >
    );
}

export default AddIngredientPage;