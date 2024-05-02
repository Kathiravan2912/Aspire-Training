var http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url=="/")
    res.write("<h1>Welcome to the express js learning...!</h1>")
    else if(req.url="/main")
    res.write("<h1>You are on Main page...!</h1>")
})

server.listen(2000,()=>{
    console.log("Your server is running successfully..!")
})