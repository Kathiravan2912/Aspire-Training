///many data deletion

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

        // const cursor = collection.find({});
        const new_value = await collection.deleteMany(
            {
                Emp_ID: 6,
                Name: 'Ram',
                Number: 9846573464,
                Branch: 'C',
                Salary: 25000
            },
            {
                Emp_ID: 7,
                Name: 'Raju',
                Number: 9143333464,
                Branch: 'D',
                Salary: 22000
            } 
        )
        console.log("Data's deleted successfully...! ");
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}
connectToMongoDB();




//one data deletion

const { MongoClient } = require('mongodb');

// Connection URI
const data = 'mongodb://127.0.0.1:27017/kathir';

// Create a new MongoClient
const user = new MongoClient(data);

async function connectToMongoDB() {
    try {
        await user.connect();

        const db = user.db('kathir');
        const collection = db.collection('employees');

        // const cursor = collection.find({});
        const new_value = await collection.deleteOne(
            {
                Emp_ID: 6,
                Name: 'Ram',
                Number: 9846573464,
                Branch: 'C',
                Salary: 25000
            }
        )
        console.log("Data's deleted successfully...! ");
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}
connectToMongoDB();