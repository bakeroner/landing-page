module.exports = function(app) {
const fs = require('fs');
const bcrypt = require('bcrypt');

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
app.post('/registration', (req, res) => {
	let login = req.body.username;
	let password = req.body.password;
	let passwordConfirm =req.body.passwordConfirm;
	console.log(login);
	console.log(password);
	userModel.findOne({username: login}, function (err, user) {
		if (user) {
			res.end(`Current username is already used`);
		}
		else if (login && password && password == passwordConfirm) {
			require('./../db/methods/userAdd')(login, password);
			res.render('index', {who: `${login}`, status: `user`});
			res.end();
			console.log('Current username is empty');
		}
		else {
			res.redirect('/newUser');
			res.end(`Incorrect input`);
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
app.post('/login', (req, res) => {
	let login = req.body.username;
	let password = req.body.password;
	console.log(login);
	console.log(password);
	userModel.findOne({username: login}, function (err, user) {
		if (user && bcrypt.compareSync(password, user.password)) {
			res.render('index', {who: `${login}`, status: `${user.status}`});
			res.end();
			//res.end(`All good! ${user.status} account`);
		}
		else {
			res.redirect('/signPage');
			res.end(`no such user or wrong password`);
			console.log('no such user or wrong password');
		}
	})
});

/*app.get('/inside', (req, res) => {
	fs.readFile(__dirname + './../../html/inside.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
	})
});*/
}