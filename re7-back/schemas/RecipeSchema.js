const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ name: { type: String }, quantity: { type: Number } }],
  directions: { type: String, required: false },
});

module.exports = mongoose.model('recipe', RecipeSchema);
