const fs = require("fs");
const http = require("http");

const app = http.createServer((req,res)=>{
    res.setHeader("Content-type","Text-html");

    const url = req.url; // give me the requeste url;
    if(url === '/'){ // If it pointing to localhost 3000 then show below response
    //another way of writing html page
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Admin</title>");
    res.write("</head>");
    res.write("<body><h1>Swayam</h1></body>");
    res.write("</html>");
    return res.end(); // (return) it tells that hume jo page chahiya tha wo mil gaya ab ye response se return karalo tip 40.00 mnutes in codeeater nodeJs
    }else if(url === '/file'){ // if url is pointing to this location
        fs.writeFileSync("NewFile.txt","Helloooo"); // we want to create file which can be done via fs module
        res.statusCode=302; // this status code will tell you to get redirrect 
        res.setHeader("Location","/"); // this tells on which location you want to get redirected
        res.end(); // response ended
    }
});

app.listen(3000);