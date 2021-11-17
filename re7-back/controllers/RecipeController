const RecipeSchema = require("../schemas/RecipeSchema");

exports.getAllRecipe = async (req, res, next) => {
    RecipeSchema.find()
        .then((data) => {
            console.log('data', data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(`Erreur lors de la récupération des recettes ${err}`);
            res.status(500);
        });

    console.log('ici');
};
