const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "admin",
  password: "raneem431566",
  database: "rcuisine", // Database name
  port: "3306", // port name, "3306" by default
});
db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});

module.exports = db;
