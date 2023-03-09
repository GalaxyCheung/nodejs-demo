/**
 * Module dependencies.
 */

var express = require('express');
var controller = require('./controllers/routecontroller');
var path = require('path');
var ejs = require('ejs');
var events = require('events');

var webconfig = function (settings) {

	var app = express();
	// all environments
	app.set('port', settings['port']);

	// app.set('views', __dirname + '/views');
	// app.set('view engine', 'ejs');
	// //	  app.use(express.logger('dev'));
	// app.use(express.urlencoded());
	// app.use(express.static(__dirname + '/public'));
	// app.use(function (req, res, next) {
	// 	throw new Error(req.url + ' not found');
	// });
	// app.use(function (err, req, res, next) {
	// 	if (err) console.error(err);
	// 	res.send(err.message);
	// });

	// 保存当前运行文件的路径，方便文件引用
	global.__base = __dirname + '/';

	app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By", ' 3.2.1');
		res.header("Content-Type", "application/json;charset=utf-8");
		next();
	});

	// index
	app.get('/123', (req, res) => {
		var result = {
			as:1
		};

		res.status(200);
		res.json(result);
	});
	controller.mapRoute(app);

	console.log('create server.');
	app.listen(app.get('port'), function () {
		console.log('webconfig server listening on port ' + app.get('port'));
	});
}
////////////////////////////////////////
module.exports = webconfig;
