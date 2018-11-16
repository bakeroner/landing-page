const mongoose = require('mongoose');
mongoose.set('debug', true)
module.exports = (fname, lname, email, phone, message) => {
	const message = new mongoose.models.messageModel({firstName: fname, lastName: lname, email: email, phone: phone, message: message});
	message.save((err) => {
		if (err) throw err;
	})
}
