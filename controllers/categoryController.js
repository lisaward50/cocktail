const { Drink, Category, Glass, Ingredient, db } = require('../models');

module.exports = {

  async index(req, res, next) {
    try {
      res.locals.categories = await Category.findAll({
        rejectOnEmpty: true,
      }); 
      next();
    } catch (e) {
      next(e);
    }
  },

  async getOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.category_id, 10);
      res.locals.categories = await Category.findOne({
        where: { id },
        rejectOnEmpty: true,
      }); 
      next();
    } catch (e) {
      next(e);
    }
  },

  async create(req, res, next) {
  try {
    const { category_name, description } = req.body;
    const newCategory = await Category.create({ category_name, description });
    await newCategory.save();
    //res.json({ id: newCategory.id });
    //res.locals.category = newCategory;
    next();
  } catch(e) {
    next(e);
  }
  },
  
  async update(req, res, next) {
  try {
    const id = Number.parseInt(req.params.category_id, 10);
    const { category_name, description } = req.body;
    const category = await Category.findOne({ where: { id } });
    await category.update({ category_name, description });
    await category.save();
    res.json(category);
    next();
  } catch(e) {
    next(e);
    }
  },

  async destroy(req, res, next) {
  try {
    const id = Number.parseInt(req.params.category_id, 10);
    await Category.destroy({
      where: { id },
      limit: 1,
    });
    next();
  } catch(e) {
    next(e);
    }
  },

};