const { Drink, Category, Glass, Ingredient, db } = require('../models');

module.exports = {

async index(req, res, next) {
  try{
  	res.locals.drinks = await Drink.findAll({
  	  rejectOnEmpty: true,
  	});
  	next(); 
  } catch (e) {
  	next(e);
  }
},

async getOne(req, res, next) {
  try {
	const id = Number.parseInt(req.params.drink_id, 10);
	const drink = await Drink.findOne({
	  where: { id },
	  rejectOnEmpty: true,
	});
  console.log(drink);
    debugger;
    res.locals.drink = drink;
	  next();
	} catch (e) {
	  next(e);
	}
},

async create(req, res, next) {
  try {
  	const { drink_name, image, code, category_id, glass_id } = req.body;
  	const newDrink = await Drink.create({ drink_name, image, code, category_id, glass_id });
    res.locals.drink = newDrink;
    next();
  } catch(e) {
  	next(e);
  }
},

async update(req, res, next) {
  try {
  	const id = Number.parseInt(req.params.drink_id, 10);
  	const { drink_name, image, code, category_id, glass_id } = req.body;
    const drink = await Drink.findOne({ where: { id } });
    await drink.update({ drink_name, image, code, category_id, glass_id });
    await drink.save();
    res.json(drink);
    next();
  } catch(e) {
    next(e);
    }
  },

async destroy(req, res, next) {
  try {
  	const id = Number.parseInt(req.params.drink_id, 10);
  	await Drink.destroy({
  	  where: { id },
  	  limit: 1,
  	});
  	next();
  }	catch(e) {
  	next(e);
    }
},

};


