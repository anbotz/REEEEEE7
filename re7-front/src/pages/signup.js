import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledForm, StyledPage } from "../styled-components";
import { signUp } from "../services/userRoute";

const SignupPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: { username: "", password: "" },
    });

    const onSubmit = (data) => {
        console.log(data);
        signUp(data);
    };

    return (
        <StyledPage>
            <h1>Enregistrement</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Pseudonyme" {...register("username")} />
                <input placeholder="Mot de passe" type='password' {...register("password")} />
                <button>Enregistrement</button>
            </StyledForm>
        </StyledPage>
    );
}

export default SignupPage;