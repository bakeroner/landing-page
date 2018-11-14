const crypto = require('crypto');
//const mongoose = require('./../db/mongoose.js');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	}
});
exports.userModel = mongoose.model('userModel',userSchema);