const { MongoClient } = require("mongodb");

// Replace the url string with your connection string.
const url =
  "mongodb://localhost:27017";

const dbName = 'fruitDB';

const client = new MongoClient(url, { useNewUrlParser: true});

async function run() {
  try {
    const database = client.db('testDB');
    const items = database.collection('Items');
    // insert item
    const doc = { _id: 1, name: "Neapolitan pizza", price: 4.0 };

    const result = await items.insertOne(doc);
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);