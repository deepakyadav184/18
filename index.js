const express = require('express');
const connect = require('./connection');
const app = express();
const student = require('./routes/student');
connect();
app.use(express.json());
app.use(student);


app.listen(3000,(err)=>{
    if (err) {
     console.log(err)   
    }
    else{
        console.log("Server running successfully on port 3000")
    }
})