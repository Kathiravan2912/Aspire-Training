const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// POST request to sign up an admin
router.post('/signup', adminController.signup);
router.post('/login', adminController.login);

module.exports = router;

