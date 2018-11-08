const mongoose = require('./mongoose.js');
mongoose.set('debug', true)
//const userModel = require('../models/schema.js');

const users = [
  {
    username: 'Admin',
    password: 'admin_password',
    status: 'admin'
  },
  {
    username: 'Manager',
    password: 'managers_password',
    status: 'user'
  },
  {
    username: 'Client',
    password: 'clients_password',
    status: 'user'
  }
]

function requireModels () {
  require('../models/schema.js')

  return Promise.all(
    Object.keys(mongoose.models)
      .map(model => mongoose.models[model].createIndexes())
  )
}

function saveUser(userOptions) {
  const user = new mongoose.models.userModel(userOptions) // new User(userOptions)
  return user.save()
}

function dropDatabase() {
  const db = mongoose.connection.db
  return db.dropDatabase()
}

function createUsers() {
  return Promise.all(
    users.map(saveUser)
  )
}

function close() {
  return mongoose.disconnect()
}

mongoose.connection.on('open', dropDatabase)
  .then(requireModels)
  .then(createUsers)
  .then(close)
  .then(() => {
    console.log('Seed has been successful!')
  })
  .catch(err => {
    close()
    throw err
  })


/*function open(callback) {
	mongoose.connection.on('open', callback);
}
function dropDatabase (callback) {
	const db = mongoose.connection.db;
	db.dropDatabase(callback);
}
function createUser(callback) {
}
function close(callback) {
	mongoose.disconnect(callback);
}*/
