// //one data update
// const { MongoClient } = require('mongodb');

// // Connection URI
// const uri = 'mongodb://127.0.0.1:27017/kathir';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function connectToMongoDB() {
//     try {
//         await client.connect();

//         const db = client.db('kathir');
//         const collection = db.collection('employees');

//         // const cursor = collection.find({});
//         const new_value = await collection.updateOne(
//             {
//                 Emp_ID: 1,
//                 Name: 'Ajay',
//                 Number: 9846573464,
//                 Branch: 'A',
//                 Salary: 25000
//             }
//         )
//         console.log("Data updated successfully...! ");
//     } catch (error) {
//         console.error('Error deleting data:', error);
//     }
// }
// connectToMongoDB();

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

        const filter = { Emp_ID: 1 }; 
        const update = { $set: { Name: 'Ananth', Salary: 30000 } }; // Update operation

        const result = await collection.updateOne(filter, update);

        console.log(`${result.modifiedCount} document updated`);
    } catch (error) {
        console.error('Error updating data:', error);
    } finally {
        await client.close();
    }
}

connectToMongoDB();
