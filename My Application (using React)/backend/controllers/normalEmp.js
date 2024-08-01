
const express = new require('express')
const router = express.Router()

const NormalEmployeeDataSchema = require('../schema/normalEmp_schema')

router.post("/submitNormalEmpData" , async(req,res)=>{
    try{

        const {userName , userEmail , userPosition, userSalary, userAddress,  userContact} = req.body;

        console.log("req.body = " , req.body)

        console.log("userName = " , userName)
        console.log("userEmail = " , userEmail)
        console.log("userPosition = " , userPosition)
        console.log("userSalary = " , userSalary)
        console.log("userAddress = " , userAddress)
        console.log("userContact = " , userContact)


        const newNormalemployee = new NormalEmployeeDataSchema({
            name : userName,
            email : userEmail,
            position : userPosition,
            salary : userSalary,
            address : userAddress,
            contact : userContact
        })

        const response = await newNormalemployee.save();

        
        if(response){
            console.log("response = " , response)

            res.send({message : "Success"})
        }
        



    }catch(err){
        res.send({message : "Faliure"})
    }
})


module.exports = router;