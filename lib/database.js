var mysql = require('mysql');
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT , 
  database : process.env.DB_NAME
});

con.connect(() => {
    console.log("Database Connected!")
})
module.exports = con;