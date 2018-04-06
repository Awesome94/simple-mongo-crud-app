const User = require('../models/userSchema')

const userHandler = (req, res)=>{
  const {name, nickname} = req.body;

  newUser = new User();
  newUser.name = name;
  newUser.nickname = nickname;

  newUser.save((err, user)=>{
    if(err){
      console.log(err);
      return res.staus(400).json({
        "Message": "Saving User Failed"
      });
    }
    res.status(200).json("user saved successfully")
  })

}
module.exports = {
  userHandler: userHandler
}