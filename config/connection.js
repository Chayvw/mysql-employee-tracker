const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"tech123",
    database: "employee_trackerDB"

});
connection.connect();
module.exports = connection;