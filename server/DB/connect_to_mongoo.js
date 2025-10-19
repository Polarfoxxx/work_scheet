const { MongoClient } = require("mongodb");
require('dotenv').config();
const mongo = process.env.MONGO_DB_LINK;

// názov databázy a kolekcie
const dbName = "Work";
const collectionName = "WorkUser";

async function connectDB() {
  const client = new MongoClient(mongo, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("✅ Pripojenie k MongoDB úspešné"); // úspešné pripojenie
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // vykonanie dotazu - nájdenie všetkých dokumentov v kolekcii
    const data = await collection.find({}).toArray();
    return data; // vrátenie nájdených dát
  } catch (error) {
    console.error("❌ Chyba pri pripojení k MongoDB:", error);
    throw error; // preposlanie chyby vyššie
  } finally {
    await client.close(); // zatvorenie pripojenia
  }
}
module.exports = connectDB;
