// const { MongoClient } = require('mongodb');

// // Connection URI
// const uri = 'mongodb://127.0.0.1:27017/aspire';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Connect to the MongoDB server
// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB successfully');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// // Call the function to connect
// connectToMongoDB();
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/kathir';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('kathir')
        const collection=db.collection('employees');

        const cursor=collection.find({});
        const new_value = await collection.insertOne(
            {
                Emp_ID: 7,
                 Name: 'Raju',
                Number: 9143333464,
                Branch: 'D',
                Salary: 22000
            }
        )
        console.log("New data inserted successfully...! The data is "+ new_value);

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();
