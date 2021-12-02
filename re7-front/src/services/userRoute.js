import { notify } from '../utils/notify';

const axios = require('axios');
const url = 'http://localhost:8000/user/';

export const signUp = (data) => {
  axios({
    method: 'post',
    url: `${url}signup`,
    data,
  })
    .then((res) => {
      notify(res.data.message);
    })
    .catch((error) => {
      notify(`erreur lors de l'enregistrement`);
      console.log(error);
    });
};

export const login = (data) =>
  axios({
    method: 'post',
    url: `${url}login`,
    data,
  })
    .then((res) => {
      notify(res.data.message);
      return res.data.token;
    })
    .catch((error) => {
      notify(`erreur lors de la connexion`);
      console.log(error);
    });
