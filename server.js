const http = require('http'); // importing http module.

// this returns a server
const server = http.createServer((req,res)=>{
    // it will only console whenever someone send request
    console.log("hello  world");
});

//Now we will make this server active
server.listen(3000);