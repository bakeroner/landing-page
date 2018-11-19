const mongoose = require('mongoose');
const userModel = require('../../models/schema.js').userModel;
mongoose.set('debug', true)

module.exports = (id, newUsername) => {
	userModel.findOne({username: newUsername}, (err, user) => {
		if (err) throw err;
		if (!user) {
			userModel.findByIdAndUpdate(id, {username: newUsername}, function (err) {
				if (err) throw err;
			})
			return true;
		}
		else {
			console.log(`username is already used`);
			return false;
		}
	})		
}