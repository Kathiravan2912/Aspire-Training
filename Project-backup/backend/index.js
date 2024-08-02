
// const mongoose = require('mongoose')
// const N_EmpSchema = require('./schema/normalEmp_schema')


// const express = require('express');
// const app = express();

// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json()); // Parse incoming JSON data



// const cors = require('cors')
// app.use(cors())

// //Higheer Employee Data
// const EMPLOYEE = require('./controllers/employee')
// app.use('/', EMPLOYEE)

// //normal Employee Data
// const Normal_Emp = require('./controllers/normalEmp')
// app.use('/',Normal_Emp)

// mongoose.connect('mongodb://127.0.0.1:27017/kathirDB')
//   .then(() => console.log('Connected!'))


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//second try

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const EMPLOYEE = require('./controllers/employee')
const Normal_Emp = require('./controllers/normalEmp');
const adminLogin = require('./controllers/adminDataCon')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// //Higheer Employee Data

app.use('/', EMPLOYEE)
app.use('/', Normal_Emp)
app.use('/', adminLogin)

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/kathirDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
