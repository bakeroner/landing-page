module.exports = function(app) {
	const loginData = require('../data/myData.json');

const userModel = require('../models/schema.js').userModel;

	app.get('/signPage', (req, res) => {//when sign
   		fs.readFile(__dirname + '/src/html/sign_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
})
app.get('/newUser', (req, res) => {//creating new user
	   	fs.readFile(__dirname + '/src/html/reg_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
});
app.get('/inside', (req, res) => {//when log in
	   	fs.readFile(__dirname + '/src/html/inside.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
});
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
app.get('/signPage/login', (req, res) => {
	let login = req.header('login');
	let password = req.header('pass');
	for (let i=0; i<loginData.credentials.length; i++) {
		console.log(i);
		if (login == loginData.credentials[i].login && password == loginData.credentials[i].password) {
			if (loginData.credentials[i].status == 'admin')
			{
				res.render('index', {who: `${login}`, status: 'admin'});
				res.end(`All good! Admin account`);
			}
			else if(loginData.credentials[i].status == 'user') {
				res.render('index', {who: `${login}`, status: 'user'});
				res.end(`All good! User account`);
			}
		}
	}
});
}