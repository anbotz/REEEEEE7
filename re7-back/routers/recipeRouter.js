const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const RecipeController = require('../controllers/RecipeController');

router.get('/', RecipeController.getAllRecipe);
router.post('/', RecipeController.createRecipe);
router.delete('/:id', RecipeController.deleteRecipe);

module.exports = router;
