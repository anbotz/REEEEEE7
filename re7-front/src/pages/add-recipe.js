import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledForm, StyledPage } from "../styled-components";

const AddRecipePage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: { name: "", ingredient: "", directions: '' },
    });

    const onSubmit = (data) => {
        console.log(data)
        navigate("/")
    };

    return (
        <StyledPage>
            <h1>Ajout d'une recette</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Nom" {...register("name")} />
                <textarea placeholder="Liste des ingrédients" {...register("ingredient")} />
                <textarea placeholder="Etapes à suivre" {...register("directions")} />
                <button>Ajouter la recette</button>
            </StyledForm>
        </StyledPage>
    );
}

export default AddRecipePage;