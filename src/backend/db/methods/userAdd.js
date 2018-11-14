//const mongoose = require('./../mongoose.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.set('debug', true)
module.exports = function(log, pass) {
	let hash = bcrypt.hashSync(pass, 10);
	const user = new mongoose.models.userModel({username: log, password: hash, status: 'user'});
	user.save((err) => {
		if (err) throw err;
	})
	return user._id;
}
