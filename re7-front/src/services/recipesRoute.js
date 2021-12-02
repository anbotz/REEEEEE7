import { notify } from '../utils/notify';

const axios = require('axios');

export const getAllRecipes = () => {
  return axios
    .get('http://localhost:8000/recipe/')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      notify(`erreur lors de la récupération des recettes`);
      console.log(error);
    });
};

export const createRecipe = (data) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8000/recipe/',
    data,
  })
    .then((res) => {
      notify(res.data.message);
    })
    .catch((error) => {
      console.log(error);
      notify('erreur lors de la création de la recette');
    });
};

export const deleteRecipe = (id) => {
  return axios({
    method: 'delete',
    url: `http://localhost:8000/recipe/${id}`,
  })
    .then((res) => {
      notify(res.data.message);
    })
    .catch((error) => {
      notify(`erreur lors de la suppression de la recette`);
      console.log(error);
    });
};

export const updateRecipe = (data, id) => {
  return axios({
    method: 'put',
    url: `http://localhost:8000/recipe/${id}`,
    data: {
      recipe: data,
    },
  })
    .then((res) => {
      notify(res.data.message);
    })
    .catch((error) => {
      notify(`erreur lors de la suppression de la recette`);
      console.log(error);
    });
};
