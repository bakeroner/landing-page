const mongoose = require('mongoose');
mongoose.set('debug', true)
module.exports = (id, fname, lname, email, phone, message) => {
	const newMessage = new mongoose.models.messageModel({user: id, firstName: fname, lastName: lname, email: email, phone: phone, message: message});
	newMessage.save((err) => {
		if (err) throw err;
	})
}
