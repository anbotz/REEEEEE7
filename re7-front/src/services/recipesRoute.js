const axios = require("axios");

export const getAllRecipes = () => {
    return axios
        .get("http://localhost:8000/recipe/")
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(`erreur lors de la récupération des recettes`);
            console.log(error);
        });
};

export const createRecipe = (data) => {
    return axios({
        method: "post",
        url: "http://localhost:8000/recipe/",
        data
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(`erreur lors de la création de la recette`);
            console.log(error);
        });
};
