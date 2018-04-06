const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String, default: ''
  },
  lastName: {
    type: String, default: ''
  },
  email: {
    type: String, default: ''
  }
});

module.exports = mongoose.model('People', userSchema)
