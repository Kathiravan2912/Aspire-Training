
const mongoose = require('mongoose')
const N_EmpSchema = require('./schema/normalEmp_schema')


const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); // Parse incoming JSON data



const cors = require('cors')
app.use(cors())

//Higheer Employee Data
const EMPLOYEE = require('./controllers/employee')
app.use('/', EMPLOYEE)

//normal Employee Data
const Normal_Emp = require('./controllers/normalEmp')
app.use('/',Normal_Emp)

mongoose.connect('mongodb://127.0.0.1:27017/kathirDB')
  .then(() => console.log('Connected!'))

//Fetch Normal Employee data

const Item = mongoose.model('Item', N_EmpSchema);

app.get('/api/NormalEmployee_Data', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

