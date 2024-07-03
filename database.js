const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

let databaseUrl = process.env.URL;
console.log(databaseUrl)

let cachedDb = null;
let promise = null;

const initDatabase = async () => {
  if (cachedDb) {
    console.log("Using existing connexion !👌");
    return cachedDb;
  }

  if (!promise) {
    promise = new MongoClient(databaseUrl, {
      connectTimeoutMS: 10000,
      maxPoolSize: 10,
    });
  } 

  console.log("Creating db connexion 🛜");

  const client = await promise;
  const db = await client.db();

  // console.log({db})

  cachedDb = db;
  return cachedDb;
};

module.exports = initDatabase