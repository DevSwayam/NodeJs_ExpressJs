const express = require('express');
const router = express.Router();

router.get("/",(req,res,next) =>{
    res.send('<h3>Nahi Ho Pa raha hey kya?</h3>');
});

module.exports = router;
