## A SIMPLE CRUD API WITH NODE AND MONGODB.
A Simple API to perform CRUD operations on a mongo Database created with Node and express.

HTTP |End Point  | Result
--- | --- | ----------
GET | `api/v1/person` | Gets all people from the database
GET | `api/v1/person/:id` | Gets a person from the database
POST | `api/v1/person` | Adds/Creates a person/person to the database
UPDATE | `api/v1/person/:id` | Updates specific person/person to the database by _id
DELETE | `api/v1/person/:id` | Deletes specific person/person to the database by _id


To run this app:

* Clone this repo
* Run `npm install`
* Run `npm start`
* Open `postman` and make requests as specified above.
