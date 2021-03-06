// .env variables MONGODB_URI
const dotenv = require("dotenv");
dotenv.config();
// database
const MongoClient = require("mongodb").MongoClient;

let _collection;

const initDatabase = () => {
  MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
    if (err) throw err;
    _collection = client.db("database01").collection("contacts");
    console.log("DB Connected Successfully");
  });
};

const getCollection = () => {
  return _collection;
};

module.exports = { initDatabase, getCollection };
