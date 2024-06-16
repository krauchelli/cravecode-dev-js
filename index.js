const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const router = require('./routes/index.routes');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const dotenv = require('dotenv');

const app = express();

const host = 'localhost'
const port = process.env.PORT || 3000;

// middlewares
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // jika mengirimkan data dalam bentuk form
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); // static files dari folder public
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: process.env.SESSION_SECRET,
    resave: process.env.SESSION_RESAVE,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED,
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);

// listener
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});