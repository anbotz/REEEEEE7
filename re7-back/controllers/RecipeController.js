const RecipeSchema = require('../schemas/RecipeSchema');

exports.getAllRecipe = async (req, res, next) => {
  try {
    const data = await RecipeSchema.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log(`Erreur lors de la récupération des recettes ${error}`);
    res.status(500);
  }
};

exports.createRecipe = async (req, res, next) => {
  const { name, ingredients, directions } = req.body;
  try {
    const recipe = new RecipeSchema({ name, ingredients, directions });
    await recipe.save();
    res.status(201).json({ message: 'Recette enregistrée' });
  } catch (error) {
    console.log(`Erreur lors de la création de la recette ${error}`);
    res.status(500);
  }
};

exports.deleteRecipe = async (req, res, next) => {
  const { id } = req.params;
  try {
    await RecipeSchema.deleteOne({ _id: id });
    return res.status(204).json({ message: 'Recette supprimée' });
  } catch (error) {
    console.log(`Erreur lors de la suppression de la recette ${error}`);
    res.status(500);
  }
};
