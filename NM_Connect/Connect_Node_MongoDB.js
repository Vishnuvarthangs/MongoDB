const { MongoClient, ServerApiVersion } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Perform operations here

  // Close the connection
  client.close();
});

/*
Perform operations on the database:

Inside the client.connect callback, you can perform various operations on your MongoDB database. For example, you can insert, update, or query data. Here's a simple example of querying documents from a collection
*/

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Access the database and collection
  const db = client.db('Master');
  const collection = db.collection('Employee');

  // Perform a query
  collection.find({}).toArray((queryErr, result) => {
    if (queryErr) {
      console.error('Error querying data:', queryErr);
    } else {
      console.log('Query result:', result);
    }

    // Close the connection
    client.close();
  });
});
