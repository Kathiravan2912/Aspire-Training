const express = require('express')
const router = express.Router()
const SignUp = require('../schema/adminData')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
router.post('/signup', async(req, res) => {

    try{

        const { Name , Email, Password } = req.body;
        // console.log("req.body = " , req.body);
    
        // console.log("Email = " , Email)
        // console.log("Password = " , Password)   

        const existingUser = await SignUp.findOne({ Email });

        if(!existingUser){

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(Password , saltRounds);

            const newAdmin = new SignUp({
                Name,
                Email,
                Password : hashedPassword
            })
        
            const response = await newAdmin.save();
            console.log("response = " , response)
            if(response){
                res.send({ message: "Success" });
            }
        }
    }catch(err){

        res.send({ message: "Sryyyyyyyyyyyyyyyy" })

    }
   
});

router.post('/login' , async(req , res)=>{
    try{

        const { Email , Password } = req.body;

        const existingUser = await SignUp.findOne({ Email });
        console.log("existingUser = " , existingUser)
       
        if(existingUser){
            const hashedPassword = existingUser.Password;
            console.log("hashedPassword = " , hashedPassword);

            const verifyPassword = await bcrypt.compare(Password , hashedPassword);
            console.log("verifyPassword = , "  , verifyPassword)
            if(verifyPassword){

                const token = jwt.sign({Email , Password} , "iubcsdio87ycds87");
                console.log("token = " , token)
                console.log("true");
                res.send({ message : "success" , token : token})

            }
        }
    }catch(err){
        res.send({ message: "Sryyyyyyyyyyyyyyyy" })
    }
})

router.get('/dashboard' , async(req,res)=>{
    try{

        // const {token} = req.headers.authorization;

        // const decoded = jwt.verify(token , "iubcsdio87ycds87");
        console.log("decoded = " , decoded)

    }catch(err){
        res.send({ message: "Sryyyyyyyyyyyyyyyy" })

    }
})


// for display
router.get('/admins', async (req, res) => {
    try {
        const admins = await SignUp.find({}, 'Name Email'); // Fetch only Name and Email fields
        res.json(admins);
    } catch (err) {
        res.status(500).send({ message: "Error fetching admins" });
    }
});


module.exports = router;



