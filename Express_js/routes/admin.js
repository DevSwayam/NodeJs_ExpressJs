const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();
router.get("/abc",(req,res,next)=>{
    console.log("middleware agaya");
    res.send(__dirname,"../","files","admin.html");
    
});


router.post("/abc",(req,res,next)=>{ 
    console.log(req.body);
    
    res.redirect("/");
});

module.exports= router;
