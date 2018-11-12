const crypto = require('crypto');
const mongoose = require('./../db/mongoose.js');

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

/*const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	}
});

userSchema.methods.encryptPassword = function (password) {
	return crypto.createHmac('shal', this.salt).update(password).digest('hex');
};
userSchema.virtual('password')
.set(function (password) {
	this._plainPassword = password;
	this.salt = Math.random() + '';
	this.hashedPassword = this.encryptPassword(password);
})
.get(function () {return this._plainPassword;});
userSchema.methods.checkPassword = function (password) {
	return this.encryptPassword(password) === this.hashedPassword;
};*/
/*userSchema.methods.checkPassword = function (password) {
	return 
}*/
exports.userModel = mongoose.model('userModel',userSchema);