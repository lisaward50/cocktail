module.exports = {
  showDrinks(req, res) {
    res.render('Drink/DrinkList');
  },
  showCategories(req, res) {
    res.render('Drink/CategoryList');
  },
  notFound(err, req, res, next) {
  	console.error(err);
  	res.sendStatus(404);
  },
  showJSON(req, res, next) {
  	res.json(res.locals);
  },
  handleCreateDrinks(req, res, next) {
    res.render('/drinks/');
  },
  handleCreateCategories(req, res, next) {
    res.redirect('/categories/');
  },
  badCreate(req, res, next) {
    res.sendStatus(401);
  },
  handleDrinkUpdate(req, res, next) {
    res.redirect('/drinks/');
  },
  handleCategoryUpdate(req, res, next) {
    res.redirect('/categories/');
  },
  badUpdate(req, res) {
    res.sendStatus(422);
  },
  showOneDrink(req, res, next) {
    res.format({
      json(){
        res.json(res.locals.drink);
      },
      html(){
        res.render('Drink/Drink');
      }
    });
  },
  handleDestroy(req, res, next) {
    res.sendStatus(204);
  }
};