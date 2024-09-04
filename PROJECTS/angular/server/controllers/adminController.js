  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  const Admin = require('../models/Admin');
  require('dotenv').config();

  
  // Function to handle signup
  exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the email already exists
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      // const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new admin
      const newAdmin = new Admin({
        name,
        email,
        password,
        // password: hashedPassword
      });
  
      await newAdmin.save();
  
      // Send response
      res.status(201).json({ admin: newAdmin });
  
    } catch (error) {
      res.status(500).json({ message: 'Error adding admin' });
    }
  };



  // login
  exports.login = async (req, res) => {
    const { name, password } = req.body;
    
    try {
      if (!name || !password) {
        return res.status(400).json({ message: 'Name and password are required' });
      }

      const admin = await Admin.findOne({ name });
      console.log(admin);
      if (!admin) {
        return res.status(401).json({ message: 'User not found' });
      }
    
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      // const isPasswordValid = password===admin.password;
      if (!isPasswordValid) {
        console.log("Incorrect password")
        return res.status(401).json({ message: 'Incorrect password' });
      }
    
      const token = jwt.sign({ id: admin._id },process.env.JWT_SECRET , {
        expiresIn: '5h',
      });
      console.log("Token: ",token);
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  };
