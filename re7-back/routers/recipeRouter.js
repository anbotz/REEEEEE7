const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");

router.get("/", RecipeController.getAllRecipe);

module.exports = router;