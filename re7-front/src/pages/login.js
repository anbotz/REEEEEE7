import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cookie from 'js-cookie';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { StyledErrorList, StyledForm, StyledPage } from '../styled-components';
import { login } from '../services/userRoute';
import { set } from '../slices/userSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = (data) => {
    if (data.username && data.password) {
      login(data).then((res) => {
        if (res) {
          const token = cookie.set('token', res);
          dispatch(set(decodeToken(token)));
          navigate('/');
        }
      });
    }
  };

  return (
    <StyledPage>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Pseudonyme" {...register('username', { required: true })} />
        <input placeholder="Mot de passe" type="password" {...register('password', { required: true })} />
        <StyledErrorList>
          {errors.username?.type === 'required' && <div>Pseudonyme requis</div>}
          {errors.password?.type === 'required' && <div>Mot de passe requis</div>}
        </StyledErrorList>
        <button>Connexion</button>
      </StyledForm>
    </StyledPage>
  );
};

export default LoginPage;
