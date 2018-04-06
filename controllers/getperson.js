const People = require('../models/userSchema');
const mongoose = require('mongoose');

const getallPeopleHandler = (req, res) => {

People.find({}, function(err, people){
  if (err) return res.status(5000).json("Error: Server Error");
  res.json(people);
});
}
const getPersonHandler = (req, res, id) => {
  People.findById(id, function(err, people){
    if (err) return console.log(err);
    res.json(people);
  });
}

module.exports = {
  getPersonHandler: getPersonHandler,
  getallPeopleHandler: getallPeopleHandler
};