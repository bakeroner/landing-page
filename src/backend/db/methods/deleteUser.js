const mongoose = require('mongoose');
const userModel = require('../../models/schema.js').userModel;
mongoose.set('debug', true)

module.exports = (username) => {
			userModel.findOneAndDelete({username: username}, function (err) {
				if (err) throw err;
			})
}