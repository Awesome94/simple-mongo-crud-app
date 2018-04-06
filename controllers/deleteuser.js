const Users = require('../models/userSchema');

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  Users.remove({
    _id: id
  }, (err, genre) => {
    if (err) {
      res.json("Delete failed")
    }
    res.json("deleted successfully")
  })

}

module.exports = {
  deleteUserHandler: deleteUserHandler
}