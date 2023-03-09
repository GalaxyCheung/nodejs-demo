var userDao = require(__base + 'dao/user');

exports.index = (req, res) => {
  userDao.getUserData(req, (userInfo) => {
    if (userInfo.isErr) {
      res.status(500);
    } else {
      res.status(200);
    }
    console.log(userInfo);
    res.json(userInfo);
  });
}

exports.search = (req, res) => {
  var result = {};

  res.status(200);
  res.json(result);
}