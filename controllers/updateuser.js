const User = require('../models/userSchema');

const updateUserHandler = (req, res) => {
  const {name, nickname, } = req.body;
  const { id } = req.params
User.findOneAndUpdate({
  _id: id
}, {
  $set:{
    name:name,
    nickname: nickname
  }
}, null, (err, updateduser) => {
  if(err){
    res.status(500).json('Error server Error')
  }
  res.json(updateduser)
})
}

module.exports = {
  updateUserHandler: updateUserHandler
}