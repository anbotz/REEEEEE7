import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledPage, StyledErrorList } from '../styled-components';
import { signUp } from '../services/userRoute';

const SignupPage = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = (data) => {
    signUp(data);
    navigate('/login');
  };

  return (
    <StyledPage>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Pseudonyme" {...register('username', { required: true, maxLength: 20, minLength: 3 })} />

        <input placeholder="Mot de passe" type="password" {...register('password', { required: true, minLength: 8 })} />
        <StyledErrorList>
          {errors.username?.type === 'required' && <div>Pseudonyme requis</div>}
          {errors.username?.type === 'maxLength' && <div>Pseudonyme trop long (20 caractères maximum)</div>}
          {errors.username?.type === 'minLength' && <div>Pseudonyme trop court (3 caractères minimum)</div>}
          {errors.password?.type === 'required' && <div>Mot de passe requis</div>}
          {errors.password?.type === 'minLength' && <div>Mot de passe trop court (8 caractères minimum)</div>}
        </StyledErrorList>
        <button>Enregistrement</button>
      </StyledForm>
    </StyledPage>
  );
};

export default SignupPage;
