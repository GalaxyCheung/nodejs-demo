const fs = require('fs');

fs.readFile('./static/file/hello.txt', 'utf-8', (err, dataStr) => {
  // 成功时返回文件内容
  // 失败时返回错误对象
  if(err) {
    console.log('读取文件失败：' + err);
  }

  console.log('读取文件成功：' + dataStr);
});