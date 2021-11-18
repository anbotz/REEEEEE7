const axios = require('axios');
const url = 'http://localhost:8000/user/';

export const signUp = (data) => {
    axios({
        method: "post",
        url: `${url}signup`,
        data,
    })
        .then((data) =>
            console.log('data: ', data)
        )
        .catch((error) => {
            console.log(`erreur lors de l'enregistrement`);
            console.log(error);
        })
}

export const login = (data) => axios({
    method: "post",
    url: `${url}login`,
    data
})
    .then((res) => res.data.token
    )
    .catch((error) => {
        console.log(`erreur lors de la connexion`);
        console.log(error);
    })