var express = require('express');
const bodyParser = require('body-parser');

var server = express();

server.get("/register",(req,res)=>{
    // res.send("<h1>This is express js..!</h1>")
    server.use(bodyParser.urlencoded({extended:false}))
    var username = req.query['name'];
    res.send("<h1> Welcome "+ username + " ...!"+"</h1>"); 
    // var usermail = req.query['email'];
    // res.send("<h1> Welcome "+ usermail + " ...!"+"</h1>");
})

server.get("/admin",(req,res)=>{
    res.send("<h1>This is Admin page..!</h1>");
   
})

// server.post("/admin",(req,res)=>{
//     res.send("<h1>This is Admin page..!</h1>")
// })

server.listen(2000,()=>{
    console.log("Server is waiting for response....!")
});