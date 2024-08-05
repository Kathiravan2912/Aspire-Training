
const express = require('express');
const router = express.Router();
const CustomersData  = require('../schema/customersData');
// const { default: Customers} = require('../../kathir/src/homepage/Customers');

// Route to create a new customer
router.post("/submitCustomerData", async (req, res) => {
    try {
        const { userName, userEmail, userAccountNumber, userAddress, userContact } = req.body;

        // Create a new customer instance
        const newCustomers = new CustomersData({
            name: userName,
            email: userEmail,
            accountNumber: userAccountNumber,
            address: userAddress,
            contact: userContact
        });

        // Save to the database
        await newCustomers.save();
        res.send({ message: "Success" });
    } catch (err) {
        console.error(err);
        res.send({ message: "Failure" });
    }
});

router.get("/getCustomerData", async (req, res) => {
    try {
        const Customers = await CustomersData.find();
        res.send(Customers);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching data" });
    }
});

module.exports = router;
