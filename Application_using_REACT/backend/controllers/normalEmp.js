const express = require('express');
const router = express.Router();
const NormalEmployee = require('../schema/normalEmp_schema');
// const jwt = require('jsonwebtoken')

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
        // const {authorization} = req.headers;
        // console.log("Authorization " , authorization)

        // const verification = jwt.verify(authorization , 'iubcsdio87ycds87');
        // console.log("verification = " , verification)

        // if(verification){
        //     const employees = await NormalEmployee.find();
        //     res.send(employees);
        // }    

        // // Save to the database
        // await newNormalEmp.save();
        // res.send({ message: "Success" });
        const normEmp = await NormalEmployee.find();
        res.send(normEmp);
    }
     catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Error fetching data" });
    }
});


// Route to delete Employee data
router.delete("/deleteNormalEmpData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await NormalEmployee.findByIdAndDelete(id);

        if (deletedEmployee) {
            res.send({ message: "Success" });
        } else {
            res.status(404).send({ message: "Employee not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure" });
    }
});

module.exports = router;
