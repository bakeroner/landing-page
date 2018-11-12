module.exports = function(app) {
const loginData = require('../data/myData.json');
const fs = require('fs');
const userModel = require('../models/schema.js').userModel;
/*123*/
const mongoose = require('./../db/mongoose.js');
mongoose.set('debug', true)
/*123*/
	app.get('/signPage', (req, res) => {//when sign
   		fs.readFile(__dirname + './../../html/sign_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
})
	/*############New User#############*/
app.get('/newUser', (req, res) => {//creating new user
	   	fs.readFile(__dirname + './../../html/reg_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
});
app.get('/newUser/login', (req, res) => {
	let login = req.header('login');
	let password = req.header('pass');
	userModel.findOne({username: login}, function (err, user) {
		if (user) {
			res.end(`Current username is already used`);
		}
		else {
			require('./../db/methods/userAdd')(login, password);
			res.end(`Current username is empty`);
			console.log('Current username is empty');
		}
	})
});
/*#########All users###########*/
app.get('/users', (req, res) => {//all users
	userModel.find({}, (err, users) => {
		if (err) return next(err);
		res.json(users);
	});
});
app.get('/users/:id', (req, res, next) => {//one user
	userModel.findById(req.params.id, (err, user) => {
		res.json(user);
	});
});
/*#################Auth#####################*/
app.get('/signPage/login', (req, res) => {
	let login = req.header('login');
	let password = req.header('pass');
	userModel.findOne({username: login}, function (err, user) {
		if (user && user.password==password) {
			res.render('index', {who: `${login}`, status: `${user.status}`});
			res.end(`All good! ${user.status} account`);
		}
		else {
			res.end(`no such user or wrong password`);
			console.log('no such user or wrong password');
		}
	})
});
}