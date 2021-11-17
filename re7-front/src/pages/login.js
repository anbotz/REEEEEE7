import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledForm, StyledPage } from "../styled-components";

const LoginPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: { username: "", password: "" },
    });

    const onSubmit = (data) => {
        console.log(data)
        navigate("/")
    };

    return (
        <StyledPage>
            <h1>Connexion</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Pseudonyme" {...register("username")} />
                <input placeholder="Mot de passe" type='password' {...register("password")} />
                <button>Connexion</button>
            </StyledForm>
        </StyledPage>
    );
}

export default LoginPage;