const userModel = require('./schema').userModel;
const user = new userModel({
});
user.save(function (err, user, affected) {
	if (err) throw err; 
})