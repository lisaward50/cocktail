require('dotenv').config();
const path           = require('path');
const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const reactViews     = require('express-react-views');
const methodOverride = require('method-override');

const categoryRouter = require('./routes/categoryRouter');
const drinkRouter    = require('./routes/drinkRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join('public')));

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(methodOverride('method'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/categories', categoryRouter);
app.use('/drinks', drinkRouter);

app.get('/', (req, res) => {
	res.render('LoginForm');
});

app.listen(PORT, () => console.log(`Server ready and listening on ${PORT} in ${app.get('env')}) mode`));
