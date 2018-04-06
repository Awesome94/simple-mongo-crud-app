const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getUser  = require('./controllers/getuser');
const createUser  = require('./controllers/createuser');
const deleteuser  = require('./controllers/deleteuser')
const updateUser  = require('./controllers/updateuser')

mongoose.connect('mongodb://localhost:27017/testdb');

const db = mongoose.connection;

db.on("error", (err)=>{
  console.log('loading db failed')
})

db.once("open", ()=>{
  console.log("connection successful");
})

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/user', getUser.getUserHandler);
app.post('/api/v1/user', createUser.userHandler);
app.delete('/api/v1/user/:id', deleteuser.deleteUserHandler );
app.put('/api/v1/user/:id', updateUser.updateUserHandler);


port = process.env.port || 3001;

app.listen(port, ()=>{
  console.log(`running on port ${port}`)
})