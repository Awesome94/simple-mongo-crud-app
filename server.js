const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getperson = require('./controllers/getperson');
const createperson = require('./controllers/createperson');
const deleteperson = require('./controllers/deleteperson')
const updateperson = require('./controllers/updateperson')

mongoose.connect('mongodb://localhost:27017/testdb');

const db = mongoose.connection;

db.on("error", (err) => {
  console.log('loading db failed')
})

db.once("open", () => {
  console.log("connection successful");
})

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/person', getperson.getallPeopleHandler);
app.get('/api/v1/person/:id', getperson.getPersonHandler);
app.post('/api/v1/person', createperson.createPersonHandler);
app.delete('/api/v1/person/:id', deleteperson.deletePersonHandler);
app.put('/api/v1/person/:id', updateperson.updatePersonHandler);


port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`running on port ${port}`)
})