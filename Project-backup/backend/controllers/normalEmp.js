const express = require('express');
const router = express.Router();
const NormalEmployee = require('../schema/normalEmp_schema');

// Route to create a new normal employee
router.post("/submitNormalEmpData", async (req, res) => {
    try {
        const { userName, userEmail, userPosition, userSalary, userAddress, userContact } = req.body;

        // Create a new employee instance
        const newNormalEmployee = new NormalEmployee({
            name: userName,
            email: userEmail,
            position: userPosition,
            salary: userSalary,
            address: userAddress,
            contact: userContact
        });

        // Save to the database
        await newNormalEmployee.save();
        res.send({ message: "Success" });
    } catch (err) {
        console.error(err);
        res.send({ message: "Failure" });
    }
});

// Route to get all normal employee data
router.get("/getNormalEmpData", async (req, res) => {
    try {
        const employees = await NormalEmployee.find();
        res.send(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching data" });
    }
});

module.exports = router;
