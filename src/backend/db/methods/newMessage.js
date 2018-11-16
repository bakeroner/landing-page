const mongoose = require('mongoose');
mongoose.set('debug', true)
module.exports = (fname, lname, email, phone, message) => {
	const newMessage = new mongoose.models.messageModel({firstName: fname, lastName: lname, email: email, phone: phone, message: message});
	newMessage.save((err) => {
		if (err) throw err;
	})
}
