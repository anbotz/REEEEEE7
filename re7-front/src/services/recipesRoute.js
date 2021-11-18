const axios = require("axios");

export const getAllRecipes = () => {
    return axios
        .get("http://localhost:8000/recipe/")
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(`erreur lors de la récupération des documents`);
            console.log(error);
        });
};