const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB URI

// Database and collection names
const dbName = 'Infinijith';
const collectionName = 'Master';

// insert employee to database
const InfiniEmployee = { name: 'KarunaMoorthy M', age: 49, city: 'Erode' };

/*
// create an array of Employees name to insert
const InfiniEmployee = [
 { name: 'KarunaMoorthy M', age: 49, city: 'Erode' },
 { name: 'Vishnuvarthan GS', age: 40, city: 'Erode' },
 { name: 'Monish M', age: 23, city: 'Erode' },
 { name: 'Sanjeev R', age: 24, city: 'Tirupur' }
];
*/

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Access the database and collection
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Insert data
     collection.insertOne(InfiniEmployee, (insertErr, result) => {
    //collection.insertMany(InfiniEmployee, (insertErr, result) => {
    if (insertErr) {
      console.error('Error inserting data:', insertErr);
    } else {
      console.log('Data inserted successfully:', result.ops);
    }

    // Close the connection
    client.close();
  });
});
