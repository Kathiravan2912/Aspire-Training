var express = require('express');
// const bodyParser = require('body-parser');

var server = express();
server.get("/register",(req,res)=>{
    res.sendFile("form.html");
    });

    server.listen(3000,()=>{
        console.log("Server is waiting for response....!")
    });