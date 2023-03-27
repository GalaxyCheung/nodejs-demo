var mysql = require('mysql');

exports.createSQLConnection = () => {
  var connCfg = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lims_fp_test'
  };
  
  return mysql.createConnection(connCfg);
}