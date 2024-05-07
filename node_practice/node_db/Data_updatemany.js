const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/kathir';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('kathir');
        const collection = db.collection('employees');

        const filter = { Branch: 'A' }; // Filter to identify documents to update
        const update = { $set: { Salary: 30000 } }; // Update operation

        const result = await collection.updateMany(filter, update);

        console.log(`${result.modifiedCount} document(s) updated`);
    } catch (error) {
        console.error('Error updating data:', error);
    } finally {
        await client.close();
    }
}

connectToMongoDB();
