const Person = require('../models/userSchema');

const updatePersonHandler = (req, res) => {
  const { name, nickname, } = req.body;
  const { id } = req.params
  Person.findOneAndUpdate({
    _id: id
  }, {
      $set: {
        name: name,
        nickname: nickname
      }
    }, null, (err, updateduser) => {
      if (err) {
        res.status(500).json('Error server Error')
      }
      res.json(updateduser)
    })
}

module.exports = {
  updatePersonHandler: updatePersonHandler
}