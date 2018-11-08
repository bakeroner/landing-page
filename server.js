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
app.set('views', __dirname + '/src/backend/views');
app.set('view engine', 'ejs');
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
/*#########Routing#############*/
require('./src/backend/routes/routes.js')(app);
/*######################*/
app.use((req,res) => {
	res.status(404).send('Page Not Found!');
})
// Serve the files on port 3000.
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!\n');
});