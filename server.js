const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require("express-handlebars");

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const { Category, User, Product } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 2 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// import custom helpers
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT} 🚀`));
});
