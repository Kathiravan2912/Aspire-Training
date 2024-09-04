const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/AngularDB',
  // {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
// }
).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api', employeeRoutes);
const customerRoutes = require('./routes/customerRoutes');
app.use('/api', customerRoutes);
const eventRoutes = require('./routes/eventRoutes');
app.use('/api',eventRoutes);
const awardRoutes = require('./routes/awardRoutes');
app.use('/api', awardRoutes);
const adminRoutes = require('./routes/adminRoutes');
app.use('/api', adminRoutes); 
// const authRoutes = require('./routes/authRoutes');
// app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
