const mongoose = require('mongoose');
const userModel = require('../../models/schema.js').userModel;
mongoose.set('debug', true)

module.exports = (id, newUsername) => {
	!userModel.findOne({username: newUsername}, (err, user) => {
		if (err) throw err;
		if (!user) {
			userModel.findOneAndUpdate({_id: id}, {username: newUsername}, function (err) {
				if (err) throw err;
			})
		}
		else {
			console.log(`username is already used`);
		}
	})		
}