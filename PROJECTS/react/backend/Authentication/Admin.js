// Controller
const express = require('express');
const router = express.Router();
const SignUp = require('../schema/adminData');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        const existingUser = await SignUp.findOne({ Email });

        if (!existingUser) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(Password, saltRounds);

            const newAdmin = new SignUp({
                Name,
                Email,
                Password: hashedPassword
            });

            const response = await newAdmin.save();
            if (response) {
                res.send({ message: "Success" });
            }
        } else {
            res.status(400).send({ message: "User already exists" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error signing up" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const existingUser = await SignUp.findOne({ Email });

        if (existingUser) {
            const hashedPassword = existingUser.Password;
            const verifyPassword = await bcrypt.compare(Password, hashedPassword);

            if (verifyPassword) {
                const token = jwt.sign({ Email }, "iubcsdio87ycds87", { expiresIn: '1h' });
                res.send({ message: "success", token }); 
            } else {
                res.status(401).send({ message: "Password is incorrect" });
            }
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error logging in" });
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        // const { token } = req.headers.authorization;
        // const decoded = jwt.verify(token, "iubcsdio87ycds87");
        // console.log("decoded = ", decoded);
    } catch (err) {
        res.status(500).send({ message: "Error accessing dashboard" });
    }
});

router.get('/admins', async (req, res) => {
    try {
        const admins = await SignUp.find({}, 'Name Email');
        res.json(admins);
    } catch (err) {
        res.status(500).send({ message: "Error fetching admins" });
    }
});

module.exports = router;
