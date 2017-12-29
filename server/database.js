const mysql = require('mysql')

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'faves'
});

module.exports = connection;