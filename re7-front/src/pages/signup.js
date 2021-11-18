import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledForm, StyledPage } from "../styled-components";
import { signUp } from "../services/userRoute";

const SignupPage = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: { username: "", password: "" },
    });

    const onSubmit = (data) => {
        signUp(data);
        navigate('/login');
    };

    return (
        <StyledPage>
            <h1>Enregistrement</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Pseudonyme" {...register("username", { required: true, maxLength: 20, minLength: 3 })} />

                <input placeholder="Mot de passe" type='password' {...register("password")} />
                {errors.username?.type === 'required' && "Pseudonyme requis"}
                {errors.username?.type === 'maxLength' && "Pseudonyme trop long (20 caractères maximum)"}
                {errors.username?.type === 'minLength' && "Pseudonyme trop court (3 caractères minimum)"}
                <button>Enregistrement</button>
            </StyledForm>
        </StyledPage>
    );
}

export default SignupPage;