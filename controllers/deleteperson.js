const People = require('../models/userSchema');

const deletePersonHandler = (req, res) => {
  const { id } = req.params;
  People.remove({
    _id: id
  }, (err, success) => {
    if (err) {
      res.json("Delete failed")
    }
    res.json("deleted successfully")
  })

}

module.exports = {
  deletePersonHandler: deletePersonHandler
}