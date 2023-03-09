var baseDao = require(__base + 'dao');

exports.getUserData = async (req, callback) => {
  var result = {
    data: {},
    err: {},
    isErr: false
  }

  var dao = baseDao.createSQLConnection();
  dao.connect();

  var sqlStr = "select * from sys_user where 1 = 1"
  if(req.query.id) {
    sqlStr += " and user_id = '" + req.query.id + "'";
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