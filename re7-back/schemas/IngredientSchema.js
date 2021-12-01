const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  unit: { type: String, default: 'unité' },
});

module.exports = mongoose.model('ingredient', IngredientSchema);
