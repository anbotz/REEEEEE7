const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");

router.get("/", RecipeController.getAllRecipe);
router.post("/", RecipeController.createRecipe)

module.exports = router;