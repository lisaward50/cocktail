const express    = require('express');
const categories = require('../controllers/categoryController');
const views      = require('../controllers/viewController');

const categoryRouter = express.Router();

categoryRouter.route('/:category_id')
  .get(categories.getOne)
  .put(categories.update, views.handleCategoryUpdate, views.badCreate)
  .delete(categories.destroy);

categoryRouter.route('/')
  .get(categories.index, views.showCategories)
  .post(categories.create, views.handleCreateCategories, views.badCreate);

categoryRouter.use(views.showJSON, views.notFound);

module.exports = categoryRouter;