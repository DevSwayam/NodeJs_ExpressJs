const http = require('http'); // importing http module.
const express = require('express'); // Ye actual me function jesa hi import hota hey
const { Console } = require('console');

const app = express(); // ye express function ka isntance type create karke app me store karliya ab app me iske methods use kar sakte ho

// helps middleware function to parse this use functions handle all requsts which are stored in array 
// This is to study response object of the creatServer() method

app.use((req,res,next)=>{ // jese hi koi request ayegi ye callback function trigger hoga
// isme next jo hey wo nodejs se differnet hey yahi help karta hey hume next ke madat se middleware ko call karne 
    console.log("middleware 1");
    next();// ye bol raha ki bhai next middle ware ke pass ja hamare isme jo middleware 2 console kara raha wo
});

app.use((req,res,next)=>{
        console.log("middleware 2 agaya");

        // node js me humne kitna taam zaam kiya tha header ko set karo ye karo res.write() isme itna sab nahi akrna padta
        res.send('<h1>Hello swayam hu bhai</h1>');
    });
app.listen(3000); // wo http createserver karne ki jarurat nahi hum simple app.listen() karke apna kaam chala saket hey