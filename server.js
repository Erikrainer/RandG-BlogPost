const express = require('express');
const path = require("path")
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers")

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app-use(session(sess));

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(_dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });