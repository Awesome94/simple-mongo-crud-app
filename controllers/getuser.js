const Users = require('../models/userSchema');
const mongoose = require('mongoose');

const getUserHandler = (req, res) => {
const retuser = new Users();
console.log ('thiss is ', retuser)
Users.find({}, function(err, questions){
  if (err) return next(err);
  res.json(questions);
});
}

module.exports = {
  getUserHandler: getUserHandler
};