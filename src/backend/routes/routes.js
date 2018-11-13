module.exports = function(app) {
const fs = require('fs');
const bcrypt = require('bcrypt');
const userModel = require('../models/schema.js').userModel;
const mongoose = require('./../db/mongoose.js');
mongoose.set('debug', true)

	app.get('/', (req, res) => {
   		fs.readFile(__dirname + './../../html/index.html', (error, data) => {
   			if(error) throw error;
   			res.writeHead(200, { 'Content-Type': 'text/html' });
    		res.end(data);
   	});
})
	app.get('/signPage', (req, res) => {//when sign
   		fs.readFile(__dirname + './../../html/sign_page.html', (error, data) => {
   			if(error) throw error;
   			res.writeHead(200, { 'Content-Type': 'text/html' });
    		res.end(data);
   	});
})
	app.get('/newUser', (req, res) => {//creating new user
	   	fs.readFile(__dirname + './../../html/reg_page.html', (error, data) => {
   			if(error) throw error;
   			res.writeHead(200, { 'Content-Type': 'text/html' });
    		res.end(data);
   	});
});
	app.get('/inside', (req, res) => {//creating new user
	   	res.render('index', {who: `${login}`, status: `user`});
		res.end();
   	});
	/*############New User#############*/

app.post('/registration', (req, res) => {
	let login = req.body.username;
	let password = req.body.password;
	let passwordConfirm = req.body.passwordConfirm;
	console.log(login);
	console.log(password);
	console.log(passwordConfirm);
	userModel.findOne({username: login}, function (err, user) {
		if (user) {
			res.redirect('/newUser');
			console.log(`Current username is already used`);
			res.end(`Current username is already used`);
		}
		else if (password === passwordConfirm) {
			require('./../db/methods/userAdd')(login, password);
			res.render('index', {who: `${login}`, status: `user`});
			res.end();
			console.log('Current username is empty');
		}
		else {
			res.redirect('/newUser');
			console.log(`Incorrect input`);
			res.end(`Incorrect input`);
		}
	})
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
		}
		else {
			res.redirect('/signPage');
			res.end(`no such user or wrong password`);
			console.log('no such user or wrong password');
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

}