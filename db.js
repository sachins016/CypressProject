const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cypress-user:<db_password>@sachin.8qpjk.mongodb.net/?retryWrites=true&w=majority&appName=Sachin";

async function connect() {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db('todo_db');
}

module.exports = { connect };