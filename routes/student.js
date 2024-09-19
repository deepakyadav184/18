const express = require('express');
const studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();

router.post('/add/user',(req,res)=>{
    studentcontroller.addStudent(req,res)

})

module.exports = router