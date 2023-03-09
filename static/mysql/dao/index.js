var mysql = require('mysql');

exports.createSQLConnection = () => {
  var connCfg = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aims_platform_portal'
  };
  
  return mysql.createConnection(connCfg);
}