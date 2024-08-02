// const express = require('express');
// const router = express.Router();
// const NormalEmployee = require('../schema/normalEmp_schema');

// // Route to submit employee data
// router.post("/submitNormalEmpData", async (req, res) => {
//     try {
//         const { userName, userEmail, userPosition, userSalary, userAddress, userContact } = req.body;
//         const newNormalEmployee = new NormalEmployee({
//             name: userName,
//             email: userEmail,
//             position: userPosition,
//             salary: userSalary,
//             address: userAddress,
//             contact: userContact
//         });
//         const response = await newNormalEmployee.save();
//         res.send({ message: "Success" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ message: "Failure" });
//     }
// });

// // Route to get employee data
// router.get("/getNormalEmpData", async (req, res) => {
//     try {
//         const employees = await NormalEmployee.find();
//         res.send(employees);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ message: "Error fetching data" });
//     }
// });

// module.exports = router;


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

// Route to update an existing normal employee
router.put("/updateNormalEmpData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Update the employee record
        await NormalEmployee.updateOne({ _id: id }, updateData);
        res.send({ message: "Data updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error updating data" });
    }
});

// Route to delete a normal employee
router.delete("/deleteNormalEmpData/:id", async (req, res) => {
    try {x
        const { id } = req.params;

        // Delete the employee record
        await NormalEmployee.deleteOne({ _id: id });
        res.send({ message: "Data deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error deleting data" });
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
