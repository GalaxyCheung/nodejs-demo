const fs = require('fs');

fs.writeFile(__dirname + '/../file/writeFile.txt', 'hello 1', (err) => {
  // 成功时返回null
  // 失败时返回错误对象
  if(err) {
    console.log(err);
  }
});