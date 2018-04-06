const Users = require('../models/userSchema');


const updateUserHandler = (req, res) => {
const user = new User;
user.find({}, (err, users)=>{
  if(err){
    res.status(500).json('Error server Error')
  }
  res.json('users')
})
}

module.exports = {
  updateUserHandler: updateUserHandler
}