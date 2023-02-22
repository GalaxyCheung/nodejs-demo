const path = require('path');

// 使用path.join代替+号拼接字符串
const pathStr = path.join('/static', 'file', 'file.txt');
console.log(pathStr);

// //获取路径下文件的文件名
// const basename = path.basename(path.join(__dirname, '../file/file.txt'), 't');
// console.log(basename);

// //获取路径下文件的扩展名
// const extname = path.extname(path.join(__dirname, '../file/file.txt'));
// console.log(extname);