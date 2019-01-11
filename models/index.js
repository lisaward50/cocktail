require('dotenv').config();

const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL,
{
    underscored: true,
    returning:   true,
});

const Drink = db.define('drink', {
  drink_name:   Sequelize.STRING(64),
  image:        Sequelize.TEXT,
  instructions: Sequelize.TEXT,
  ingredients:  Sequelize.TEXT,
  code:         Sequelize.INTEGER,
});

const Category = db.define('category', {
  category_name:        Sequelize.STRING(64),
  description: Sequelize.TEXT,
});

const Glass = db.define('glass', {
  glass_name:  Sequelize.STRING(64),
});

const Ingredient = db.define('ingredient', {
  ingredient_name: Sequelize.TEXT,
});

// ASSOCIATIONS

Category.hasMany(Drink);
Drink.belongsTo(Category);

Glass.hasMany(Drink);
Drink.belongsTo(Glass);

//Drink.belongsToMany(Ingredient, { through: 'drink_ingredient_xref'});
//Ingredient.belongsToMany(Drink, { through: 'drink_ingredient_xref'});


module.exports = {
  Drink,
  Category,
  Glass,
  Ingredient,
  db,
};
