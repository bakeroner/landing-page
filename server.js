const express = require('express');
const webpack = require('webpack');
const engine = require('ejs-locals');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const fs = require('fs');
const config = require('./webpack.config.js');
const compiler = webpack(config);
app.set('port', config.devServer.port);
app.engine('ejs', engine);
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
const loginData = require('./src/backend/data/myData.json');
//app.set('') can set info from json(need to be required)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

/*#########Routing#############*/
app.get('/signPage', (req, res) => {//change it
   		fs.readFile(__dirname + '/src/html/sign_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
})
app.get('/newUser', (req, res) => {//change it
	   	fs.readFile(__dirname + '/src/html/reg_page.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
})
app.get('/inside', (req, res) => {//change it
	   	fs.readFile(__dirname + '/src/html/inside.html', (error, data) => {
   		if(error) throw error;
   		res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end(data);
   	});
})
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
app.use((req,res) => {
	res.status(404).send('Page Not Found!');
})
// Serve the files on port 3000.
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!\n');
});