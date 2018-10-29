var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sptn.A16tg"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//testing branch