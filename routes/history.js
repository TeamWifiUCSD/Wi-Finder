// Get all of our wifi data
var data = require('../data.json');

exports.viewHistory = function(req, res) { 
	res.render('history', data); // controller code goes here 
};