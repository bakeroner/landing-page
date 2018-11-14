module.exports = function(app) {
const fs = require('fs');
const bcrypt = require('bcrypt');
const userModel = require('../models/schema.js').userModel;
//const mongoose = require('./../db/mongoose.js');
const mongoose = require('mongoose');
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
app.get('/login', (req, res) => {//creating new user
	userModel.findOne({_id: req.session.userId}, function (err, user) {
   		res.render('index', {who: `${user.username}`, status: `${user.status}`});
		res.end();
	})
});
	
/*#################Auth#####################*/
app.post('/login', (req, res) => {
	console.log(req.session);
	console.log(req.session.userId);
	console.log(req.body.checkRemember);
	userModel.findOne({username: req.body.username}, function (err, user) {
		if (user && bcrypt.compareSync(req.body.password, user.password)) {
			req.session.userId = user._id;
			res.redirect('/login');
		}
		else {
			res.redirect('/signPage');
			res.end(`no such user or wrong password`);
			console.log('no such user or wrong password');
		}
	})
});
/*############New User#############*/
app.post('/registration', (req, res, next) => {
	userModel.findOne({username: req.body.username}, function (err, user) {
		if (user) {
			res.redirect('/newUser');
			console.log(`Current username is already used`);
			res.end(`Current username is already used`);
		}
		else if (req.body.password === req.body.passwordConfirm) {
			req.session.userId = require('./../db/methods/userAdd')(req.body.username, req.body.password);
			res.redirect('/login');
			console.log('Current username is empty');
		}
		else {
			res.redirect('/newUser');
			console.log(`Incorrect input`);
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

}