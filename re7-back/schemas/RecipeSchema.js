const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, },
    directions: { type: String, required: true },
});

module.exports = mongoose.model("recipe", RecipeSchema);