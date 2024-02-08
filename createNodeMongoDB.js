/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Master"; */

const { MongoClient, ServerApiVersion } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//const database = client.db("Master");
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function addDocs(){
  const database = client.db("Master");
    const foods = database.collection("foods");
    // create an array of documents to insert
    const docs = [
      { name: "cake", healthy: false },
      { name: "Mango", healthy: true },
      { name: "donut", healthy: false }
    ];
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await foods.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
}
async function callMongo(){
  try {
    await client.connect();
  
    await listDatabases(client);
    await addDocs();
  
  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }
}
callMongo();