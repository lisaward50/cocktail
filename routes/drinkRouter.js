const express = require('express');
const drinks  = require('../controllers/drinkController');
const views   = require('../controllers/viewController');

const drinkRouter = express.Router();

drinkRouter.route('/:drink_id')
  .get(drinks.getOne, views.showOneDrink)
  .put(drinks.update, views.handleDrinkUpdate, views.badCreate)
  .delete(drinks.destroy, views.handleDestroy);

drinkRouter.route('/')
  .get(drinks.index, views.showDrinks)
  .post(drinks.create, views.handleCreateDrinks, views.badCreate);

drinkRouter.use(views.showJSON, views.notFound);

module.exports = drinkRouter;