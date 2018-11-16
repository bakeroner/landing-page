const mongoose = require('mongoose');
const userModel = require('../../models/schema.js').userModel;
mongoose.set('debug', true)

module.exports = (username, statusUp) => {
		if (statusUp) {
			userModel.findOneAndUpdate({username: username}, {status: 'admin'}, function (err) {
				if (err) throw err;
			})
		}
		else {
			userModel.findOneAndUpdate({username: username}, {status: 'user'}, function (err) {
				if (err) throw err;
			})
		}	
}