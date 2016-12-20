// Get all of our wifi data
var data = require('../data.json');

exports.view = function(req, res){
	data["view2"] = false;
	res.render('index', data);
};

exports.view2 = function(req, res){
	data["view2"] = true;
	res.render('index', data);
};