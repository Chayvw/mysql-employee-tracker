const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"tech123",
    database: "employee"

});
connection.connect();
module.exports = connection;