const express = require('express');
const router = express.Router();

const app = express();
router.get("/abc",(req,res,next)=>{
    console.log("middleware agaya");
    res.send('<form action = "/admin/abc" method ="POST"><input type="text" name="title"></input><button type="submit">Add Course</button></form>');
    
});


router.post("/abc",(req,res,next)=>{ 
    console.log(req.body);
    
    res.redirect("/");
});

module.exports= router;
