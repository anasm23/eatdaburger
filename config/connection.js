/// define mysql connection with burger_db
var mysql = mysql.createConnection({
    host: "localhost",

    port: 3010,

    user: "root",

    password: "",
    database: "burger_db"
});
var connection;
///error function
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });

  ///Export module
  module.exports = connection;