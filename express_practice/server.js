var express = require('express');

var server = express();

server.post("/",(req,res)=>{
    res.send("<h1>This is express js..!</h1>")
})

server.get("/admin",(req,res)=>{
    res.send("<h1>This is Admin page..!</h1>")
})

// server.post("/admin",(req,res)=>{
//     res.send("<h1>This is Admin page..!</h1>")
// })

server.listen(2000,()=>{
    console.log("Server is waiting for response....!")
});