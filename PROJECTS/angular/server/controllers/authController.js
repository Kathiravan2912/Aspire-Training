// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt'); // If you hashed passwords during signup
// const User = require('../models/Admin'); // Assuming you have a User model

// POST /api/login
// router.post('/signup', async (req, res) => {
//   const { name, password } = req.body;

//   try {
//     // Find the user by username
//     const user = await User.findOne({ name });

//     if (!user) {
//       return res.status(400).json({ success: false, message: 'Username does not exist.' });
//     }

//     // Compare the provided password with the stored password
//     const isMatch = await bcrypt.compare(password, user.password); // Only if passwords are hashed
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: 'Incorrect password.' });
//     }

//     // If successful, proceed to the next page
//     res.json({ success: true, message: 'Login successful!' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Server error.' });
//   }
// });

// module.exports = router;
