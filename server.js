const express = require('express');
const webpack = require('webpack');
const engine = require('ejs-locals');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
app.set('port', config.devServer.port);
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const loginData = require('./src/backend/data/myData.json');
//app.set('') can set info from json(need to be required)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/backend', (req, res) => {
  res.send('Hello backend!');
});
//app.get('/backend/after_auth.html', (req, res) => {
app.get('/index/login', (req, res) => {
//	console.log(loginData.credentials[0].login);
	//console.log(loginData.credentials.length);
	let login = req.header('login');
	let password = req.header('pass');
	//console.log(loginData.credentials[1].login);
	//console.log(login);
	//console.log(loginData.credentials[1].password);
	//console.log(password);
	for (let i=0; i<loginData.credentials.length; i++) {
		console.log(i);
		if (login == loginData.credentials[i].login && password == loginData.credentials[i].password) {
			if (loginData.credentials[i].status == 'admin')
			{
				res.render('index', {who: `${login}`, status: 'admin'});
				res.send(`All good! Admin account`);
				//res.sendFile('./src/backend/after_auth');
			}
			else if(loginData.credentials[i].status == 'user') {
				res.render('index', {who: `${login}`, status: 'user'});
				res.send(`All good! User account`);
			}
		}
	}
});
app.use((req,res) => {
	res.status(404).send('Page Not Found!');
})
// Serve the files on port 3000.
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!\n');
});