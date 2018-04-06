const Person = require('../models/userSchema')

const createPersonHandler = (req, res)=>{
  const {firstName, lastName, email} = req.body;

  if(!firstName){
    return res.status(400).json("error, first name cannot be blank")
  }
  const newPerson = new Person();
  newPerson.firstName = firstName;
  newPerson.lastName = lastName;
  newPerson.email = email

  newPerson.save((err, person)=>{
    if(err){
      console.log(err);
      return res.staus(400).json({
        "Message": "Saving Person Failed"
      });
    }
    res.status(200).json("person saved successfully")
  })

}
module.exports = {
  createPersonHandler: createPersonHandler
}