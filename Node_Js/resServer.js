const http = require("http");

// This is to study response object of the creatServer() method
const app = http.createServer((req,res)=>{
   // console.log(res);

   // Now we will try to respond back using html page
   // type of response we will be sending when someone triggers the server
   res.setHeader("Content-Type","text-html");

   // The response we would like to show when someone visits our url
   res.write("<html><head><title>Swayam,s page</title></head><body>Swayam Karle</body><html>");
   
   // telling server that response has ender
   res.end();
});

app.listen(3000);