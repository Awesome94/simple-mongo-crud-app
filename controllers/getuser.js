const Users = require('../models/userSchema');
const mongoose = require('mongoose');

const getUserHandler = (req, res) => {
const retuser = new Users();

Users.find({}, function(err, users){
  if (err) return res.status(5000).json("Error: Server Error");
  res.json(users);
});
}

module.exports = {
  getUserHandler: getUserHandler
};