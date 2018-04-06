const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type: String, default: ''
  },
  nickname:{
    type: String, default: ''}
});

module.exports= mongoose.model('Users', userSchema)
