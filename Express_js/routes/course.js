const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/",(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../',"files","course.html"));//2.44 hour reffernce
});

module.exports = router;
