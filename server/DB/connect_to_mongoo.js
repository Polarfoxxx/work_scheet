const { MongoClient } = require("mongodb");
require('dotenv').config({path:"../.env"}); // načítanie .env

const mongo = process.env.MONGO_DB_LINK;

// názov databázy a kolekcie
const dbName = "Work";
const collectionName = "WorkUser";

async function connectDB() {
  const client = new MongoClient(mongo);

  try {
    // pripojenie
    await client.connect();
    console.log("✅ Pripojené na MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // získať všetky dokumenty
    const result = await collection.find({}).toArray();

    console.log("Nájdené dokumenty:");
    console.log(result);

  } catch (err) {
    console.error("❌ Chyba:", err);
  } finally {
    // zatvorenie spojenia
    await client.close();
  }
}
connectDB();
module.exports = connectDB;
