//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
const mongoose = require('mongoose');

const server = 'localhost:27017'
const database = 'qa'

class Database {
  constructor(){
    this._connect()
  }

  _connect(){
    mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true})
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()