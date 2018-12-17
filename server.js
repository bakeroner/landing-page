const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const webpack = require('webpack');
const engine = require('ejs-locals');	
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const db = require('./src/backend/db/mongoose.js');

app.set('port', config.devServer.port);
app.engine('ejs', engine);
app.set('views', __dirname + '/src/backend/views');
app.set('view engine', 'ejs');
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

/*############Cookie#############*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'BubbleBeer',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db })
}));
/*#########Routing#############*/
require('./src/backend/routes/routes.js')(app);
/*######################*/
app.use((req,res) => {
	//res.status(404).send('Page Not Found!!');
	res.status(404).render('indexError');
})
// Serve the files on port 3000.
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!\n');
});