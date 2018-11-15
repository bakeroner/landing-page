module.exports = function(app) {
const fs = require('fs');
const bcrypt = require('bcrypt');
const userModel = require('../models/schema.js').userModel;
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
app.get('/signPageMobile', (req, res) => {//when sign
	if (!req.session.userId) {
   		fs.readFile(__dirname + './../../html/sign_page.html', (error, data) => {
   			if(error) throw error;
   			res.writeHead(200, { 'Content-Type': 'text/html' });
    		res.end(data);
   		});
   	}
   	else {
   		res.redirect('/login');
   	}
})
app.get('/newUser', (req, res) => {//when reg
	fs.readFile(__dirname + './../../html/reg_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
});
app.get('/login', (req, res) => {//inside
	userModel.findById(req.session.userId, (err, user) => {
   		res.render('index', {who: `${user.username}`, status: `${user.status}`});
		res.end();
	})
});
/*#####*/
app.get('/login/changepass', (req, res) => {//inside
	fs.readFile(__dirname + './../../html/change_password.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
	})
});
app.get('/login/changeusername', (req, res) => {//inside
	fs.readFile(__dirname + './../../html/change_username.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
	})
});	
/*#################Auth#####################*/
app.post('/login', (req, res) => {
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
app.post('/registration', (req, res) => {
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
/*############Change Pass and username#############*/
app.post('/changeusername', (req, res) => {
	require('./../db/methods/changeUsername')(req.session.userId, req.body.username);
	res.redirect('/login');
})
app.post('/changepass', (req, res) => {
	if (req.body.newPassword == req.body.newPasswordConfirm) {
		require('./../db/methods/changePassword')(req.session.userId, req.body.oldPassword, req.body.newPassword);
		res.redirect('/login');
	}
	else {
		console.log(`Incorrect input`);
		res.end(`Incorrect input`);
	}
})
app.post('/logout', (req, res) => {
	req.session.userId = '';
	res.end();
})
app.post('/', (req, res) => {
	if (req.session.userId) {
		res.end('true');
	}
	else {
		res.end('false');
	}
})
/*#########All users###########*/
app.get('/login/users', (req, res) => {//all users
	userModel.find({}, (err, users) => {
		if (err) return next(err);
		res.json(users);
	});
});
app.get('/login/users/:id', (req, res, next) => {//one user
	userModel.findById(req.params.id, (err, user) => {
		res.json(user);
	});
});

}