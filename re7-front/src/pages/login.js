import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cookie from 'js-cookie';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { StyledForm, StyledPage } from '../styled-components';
import { login } from '../services/userRoute';
import { set } from '../slices/userSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = (data) => {
    login(data)
      .then((res) => {
        const token = cookie.set('token', res);
        dispatch(set(decodeToken(token)));
      })
      .then(() => navigate('/'));
  };

  return (
    <StyledPage>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Pseudonyme" {...register('username')} />
        <input placeholder="Mot de passe" type="password" {...register('password')} />
        <button>Connexion</button>
      </StyledForm>
    </StyledPage>
  );
};

export default LoginPage;
