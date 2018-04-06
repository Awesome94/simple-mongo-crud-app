const Users = require('../models/userSchema');


const deleteUserHandler = (req, res)=>{
  const user = new User();
  user.find({
    id
  })

}

module.exports = {
  deleteUserHandler: deleteUserHandler
}