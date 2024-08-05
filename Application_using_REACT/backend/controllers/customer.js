
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
        // console.log("Data fetched" )
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching data" });
    }
});

// Route to update customer data
router.put("/updateCustomerData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, userEmail, userAccountNumber, userAddress, userContact } = req.body;

        // Update customer data
        const updatedCustomer = await CustomersData.findByIdAndUpdate(id, {
            name: userName,
            email: userEmail,
            accountNumber: userAccountNumber,
            address: userAddress,
            contact: userContact
        }, { new: true });

        if (updatedCustomer) {
            res.send(updatedCustomer);
        } else {
            res.status(404).send({ message: "Customer not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure" });
    }
});

// Route to delete customer data
router.delete("/deleteCustomerData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCustomer = await CustomersData.findByIdAndDelete(id);

        if (deletedCustomer) {
            res.send({ message: "Success" });
        } else {
            res.status(404).send({ message: "Customer not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure" });
    }
});


module.exports = router;
