require("dotenv").config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/Router");

//Test
const sql = require("./utils/SQLConfig");


//Session
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const options = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SESSION_DATABASE
};

const sessionStore = new MySQLStore(options);

// Session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: true, // élesben is true
    saveUninitialized: true, // false élesben
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 nap
        /* HTTPS-hez */
        // secure: true,
        // httpOnly: true
    }
}));

// "Globális változók"
app.use((req, res, next) => {
    res.locals.systemMessage = req.session.info || null;
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    res.locals.user = req.session.user || null;
    
    req.session.info = null;
    
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
//Routes
app.use("/", router);

//Set the view engine and the folder where views located
app.set("view engine", "ejs");
app.set("views", "./views");


//Set the folder where CSS, JS, pics, etc. located
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on ${port}`);
});

console.log(process.env.MESSAGE);