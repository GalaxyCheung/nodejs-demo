var baseDao = require(__base + 'dao');

exports.getUserData = async (req, callback) => {
  var result = {
    data: {},
    err: {},
    isErr: false
  }

  var dao = baseDao.createSQLConnection();
  dao.connect();

  var sqlStr = "select * from t_core_user where 1 = 1"
  if(req.query.id) {
    sqlStr += " and ID = '" + req.query.id + "'";
  }
  await dao.query(sqlStr, (err, res) => {
    if (err) {
      result.isErr = true;
      result.err = err;
    }
    result.data = res;

    callback(result)

    dao.end();
  })
}