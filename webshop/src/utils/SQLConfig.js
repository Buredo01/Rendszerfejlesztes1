const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_BOOK_DATABASE
});


connection.connect((err) => {
    if(err) {
        console.error("Error while connecting to the database!", err.code)
    } else {
        console.log("Connected to the db!");
    }
});

module.exports = connection;