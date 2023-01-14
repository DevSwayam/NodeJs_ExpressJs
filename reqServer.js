const http = require('http'); // importing http module.

// This is to study response object of the creatServer() method
const server = http.createServer((req,res)=>{
    //It will print request object 
    console.group(req);

    // Request object gives us some access to to its method on eof its exaples is
    console.log("url of request : ", req.url, " Method : ", req.method, " Header : ", req.headers);
});

//Now we will make this server active
server.listen(3000);