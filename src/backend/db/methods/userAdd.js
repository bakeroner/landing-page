const mongoose = require('./../mongoose.js');
mongoose.set('debug', true)
module.exports = function(log, pass) {
const user = new mongoose.models.userModel({username: log, password: pass, status: 'user'});
user.save((err) => {
	if (err) throw err;
})
}
