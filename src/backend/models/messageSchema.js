const crypto = require('crypto');
const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}	
});
exports.messageModel = mongoose.model('messageModel',messageSchema);