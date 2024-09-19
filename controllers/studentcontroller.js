const Student = require('../models/Student');

async function addStudent(req,res) {
    try{
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save();
        console.log("Data saved Successfully.....");
        res.end("data Added")
    }catch(err){
    console.log(err)
    }
}

module.exports = {
    addStudent
}