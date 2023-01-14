const http = require('http'); // importing http module.
const express = require('express'); // Ye actual me function jesa hi import hota hey
const { Console } = require('console');
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin");
const courseRoutes = require("./routes/course");
const path  =require('path');

const app = express(); // ye express function ka isntance type create karke app me store karliya ab app me iske methods use kar sakte ho
// helps middleware function to parse this use functions handle all requsts which are stored in array 
// This is to study response object of the creatServer() method

app.use(bodyParser.urlencoded({extended:false})); // body parser for parsing text which is coming from client side
app.use(express.static(path.join(__dirname,'files',"main.css")));

/*
app.use((req,res,next)=>{ // jese hi koi request ayegi ye callback function trigger hoga
// isme next jo hey wo nodejs se differnet hey yahi help karta hey hume next ke madat se middleware ko call karne 
    console.log("middleware 1");
    next();// ye bol raha ki bhai next middle ware ke pass ja hamare isme jo middleware 2 console kara raha wo
});
*/

/*
// jab bhi particularly /abc pe redirect akreag tab hi ye message ayega
app.get("/abc",(req,res,next)=>{
    console.log("middleware agaya");
    res.send('<form action = "/course" method ="POST"><input type="text" name="title"></input><button type="submit">Add Course</button></form>');
    // next() agar yaha next likha to ye enxt middleware ka response bhejega + ye wlaa bhi response the error milega tumhe
});


app.post("/course",(req,res,next)=>{ // app.use se aap jab app.post pe switch karoge to ye bas post request pe hi active hoga
    console.log(req.body);
    
    res.redirect("/");
});
*/
/*
app.get("/",(req,res,next) =>{
    res.send('<h3>Nahi Ho Pa raha hey kya?</h3>');
})
*/

// humne nodejs me url/path change karne pe alag response chahiye bola tha na wo isme use kar rahe kitna simple hey bas 
// app.use("/",(req,res,next)=>{});
// upar wale aur isme fark dekh smaaz ajayega
/*
app.use("/",(req,res,next)=>{
        console.log("middleware 2 agaya");
        console.log(req.url);// get request for /favicon.ico arahi server pe isliyeye horaha agar samza nahi to timestamp "2.15 hour"
        res.send('<h1>Swayam Hu Bhai</h1>');
        // node js me humne kitna taam zaam kiya tha header ko set karo ye karo res.write() isme itna sab nahi akrna padta
        
    });
*/

app.use(adminRoutes);
app.use(courseRoutes);

app.listen(3000); // wo http createserver karne ki jarurat nahi hum simple app.listen() karke apna kaam chala saket hey



// GET , POST KE USE CASES ON 2.25 HOUR SE DEKHNA MUST