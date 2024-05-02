const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/kathir')
.then(()=> console.log("database connected successfully!"))
.catch((err)=> console.log("404 Error not found"))

// console.log(__filename);


app.post('/sign_in', function (req, res){
    console.log("req = " , req.body);
    let username = req.body.userName;
    let password = req.body.password;

    

    console.log("username = " , username);

    res.send({
        status: 1,
        message: "Welcome to home page",
        username: username,
        password: password
    });
});

app.listen(port , ()=>{
    console.log(`example port ${port}`);
})