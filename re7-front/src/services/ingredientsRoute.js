const axios = require("axios");

export const getAllIngredients = () => {
    return axios
        .get("http://localhost:8000/ingredient/")
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(`erreur lors de la récupération des ingredients`);
            console.log(error);
        });
};

export const createIngredient = (data) => {
    return axios({
        method: "post",
        url: "http://localhost:8000/ingredient/",
        data
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(`erreur lors de la création de l'ingrédient`);
            console.log(error);
        });
};
