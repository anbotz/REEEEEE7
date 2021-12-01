const IngredientSchema = require('../schemas/IngredientSchema');

exports.getAllIngredient = async (req, res, next) => {
  try {
    const data = await IngredientSchema.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log(`Erreur lors de la récupération des ingrédients ${error}`);
    res.status(500);
  }
};

exports.createIngredient = async (req, res, next) => {
  const { name, unit } = req.body;
  try {
    const ingredient = new IngredientSchema({ name, unit });
    await ingredient.save();
    res.status(201).json({ message: 'Ingrédient enregistré' });
  } catch (error) {
    console.log(`Erreur lors de la création de l'ingrédient ${error}`);
    res.status(500);
  }
};
