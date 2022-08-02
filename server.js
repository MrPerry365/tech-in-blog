const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const ses = {
    secret: '123testicles123',
    saveUninitialized: true,
    resave: false,
    cookie: {},
    store: new SequelizeStore({
        db: sequelize
    })
};

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.use(session(ses));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.use(require('./controllers/'));

sequelize.sync({ force : false }).then(() => {
    app.listen(PORT, () => console.log('Listening on port ' + PORT));
});