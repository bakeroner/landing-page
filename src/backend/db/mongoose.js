const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');
console.log(dbconfig.uri);
mongoose.connect(`${dbconfig.uri}`, {
	useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected ...');
});
module.exports = mongoose;