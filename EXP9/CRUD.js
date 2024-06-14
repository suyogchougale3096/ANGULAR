const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connection() {
  try {
    await client.connect();
    console.log("Database connected success");
  } catch (error) {
    console.log("error");
  }
}

connection();

async function insertRecord() {
  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("student");
    const obj = { rollno: 2, name: "suyog" };
    const result = await collection.insertOne(obj);
    console.log("id of inserted data is : " + result.insertedId);
  } catch (error) {
    console.log("Error");
  } finally {
    await client.close();
    console.log("Database disconnected success!");
  }
}

// insertRecord();

async function displayRecords() {
  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("student");
    const result = collection.find({});
    await result.forEach((document) => {
      console.log(document);
    });
    console.log("id of inserted data is : " + result.insertedId);
  } catch (error) {
    console.log("Error");
  } finally {
    await client.close();
    console.log("Database disconnected success!");
  }
}

// displayRecords();

async function updateRecord() {
  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("student");
    const result = await collection.updateOne(
      { rollno: 1 },
      { $set: { name: "suyog chougale" } }
    );
  } catch (error) {
    console.log("Error");
  } finally {
    await client.close();
    console.log("Database disconnected success!");
  }
}

// updateRecord();

async function deleteRecord() {
  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("student");
    const result = await collection.deleteOne({ rollno: 2 });
  } catch (error) {
    console.log("Error");
  } finally {
    await client.close();
    console.log("Database disconnected success!");
  }
}

// displayRecords();
// deleteRecord();
// displayRecords();
