//fetching all routes files.
var api = require('./api');

var routes = function(app,express){
	//Initilizing routes
	api(app,express);


}

module.exports = routes;
