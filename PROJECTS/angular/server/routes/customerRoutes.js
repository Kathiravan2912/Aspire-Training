const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

// Define routes
router.post('/customers', customerController.createCustomer);
router.get('/customers', customerController.getCustomers);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);


module.exports = router;
