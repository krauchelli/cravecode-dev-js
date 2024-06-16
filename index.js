const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const router = require('./routes/index.routes');
const session = require('express-session');
const pg = require('pg');
const pgSession = require('connect-pg-simple')(session);
const dotenv = require('dotenv');
const { create } = require('domain');
const { createTextChangeRange } = require('typescript');

const pgPool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pgPool.query(`
    CREATE TABLE IF NOT EXISTS "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);
    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
`, err => {
    if (err) {
        console.log(err);
    }
});

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
    store: new pgSession({
        pool: pgPool,
        tableName: 'session'
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