const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userModel = require('../../models/schema.js').userModel;
mongoose.set('debug', true)

module.exports = (id, pass, newPass) => {

	userModel.findOne({_id: id}, function (err, user) {
		if (err) throw err;
		if (bcrypt.compareSync(pass, user.password)) {
			let hash = bcrypt.hashSync(newPass, 10);
			userModel.findOneAndUpdate({_id: id}, {password: hash}, function (err) {
				if (err) throw err;
			})
		}
	})
}
			