const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const path = require('path');
const os = require('os');
const events = require('events');

function start() {
  // const jsonFile = fs.readFileSync('script/test.json'); // 加载json文件，获得Buffer
  // const json = JSON.parse(jsonFile); // 解析json
  // console.log(json);


  // console.log('__dirname:', __dirname); // 文件夹
  // console.log('__filename:', __filename); // 文件
  // const path0 = path.join(__dirname, 'views', 'view.html'); // 如果不希望自己手动处理 / 的问题，使用 path.join
  // console.log(path0);


  // const homeDir =  os.homedir(); // HOME 目录
  // console.log(homeDir);


  // console.log(process.env.PATH.split(':').join('\n')); // 查看系统环境变量path
  // process.env.PATH += ':/a_new_path_to_executables'; // 设置系统环境变量path


  // 获取平台信息
  // console.log(process.arch); // x64
  // console.log(process.platform); // darwin
  // console.log(process.memoryUsage()); // 获取内存使用情况


  // console.log(process.argv); // 获取命令行参数


  // process.nextTick 方法允许你把一个回调放在下一次时间轮询队列的头上，这意味着可以用来延迟执行，结果是比 setTimeout 更有效率。

  // setImmediate(() => {
  //   console.log('setImmediate success');
  // })
  // process.nextTick(function () {
  //   console.log('nextTick success');
  // });
  // 结果:
  // process success
  // setImmediate success


  // 如果没有提供编码格式，文件操作以及很多网络操作就会将数据作为 Buffer 类型返回。


  // const mime = 'image/png';  
  // const encoding = 'base64';
  // const base64Data = fs.readFileSync(`${__dirname}/assets/test.png`).toString(encoding);
  // const uri = `data:${mime};${encoding},${base64Data}`;
  // // console.log(uri);
  //
  // // data URI 转文件
  // const uriToBase64Data = uri.split(',')[1];
  // const buf = Buffer.from(uriToBase64Data, encoding);
  // fs.writeFileSync(`${__dirname}/assets/test0.png`, buf);


  // // 事件
  // // 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
  // class EventTest extends events.EventEmitter {
  //   constructor() {
  //     super();
  //     // 处理异常
  //     // EventEmitter 实例发生错误会发出一个 error 事件
  //     // 如果没有监听器，默认动作是打印一个堆栈并退出程序
  //     this.on('error', function (err) {
  //       console.log('Error:', err);
  //     });
  //   }
  // }
  // const event = new EventTest();
  //
  // const fun0 = function(...arg){
  //   console.log('fun0: ' + [...arg]);
  // }
  // const fun1 = function(...arg){
  //   console.log('fun1: ' + [...arg]);
  // }
  //
  // // 为指定事件注册一个监听器，接收一个字符串 event 和一个回调函数 listener。
  // event.on('stop', fun0);
  // event.on('stop', fun1);
  // event.on('play', fun0);
  // event.on('play', fun1);
  //
  // // 发射 event 事件，传 递若干可选参数到事件监听器的参数表。
  // event.emit('error');
  // event.emit('stop', {test: 1}, [1, 2], 'arg2'); // fun0 + fun1
  // // 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器。
  // event.removeListener('stop', fun0);
  // event.emit('stop', {test: 1}, [1, 2], 'arg2'); // fun1
  // // 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。
  // event.removeAllListeners('play');
  // event.emit('play', 123, true, null, undefined); // 不会执行
}

start();
