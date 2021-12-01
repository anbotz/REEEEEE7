const express = require('express');
const router = express.Router();
const IngredientController = require('../controllers/IngredientController');

router.get('/', IngredientController.getAllIngredient);
router.post('/', IngredientController.createIngredient);

module.exports = router;
