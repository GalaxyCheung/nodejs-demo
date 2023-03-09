// map request with request handler
exports.mapRoute = function(app) {
	//prefix = '/' + prefix;

	var prefix_user = '/user';

	var prefixUserObj = require('./' + prefix_user);
	
	// search
	app.post(prefix_user + '/search', prefixUserObj.search);	
	// index
	app.get(prefix_user, prefixUserObj.index);
};