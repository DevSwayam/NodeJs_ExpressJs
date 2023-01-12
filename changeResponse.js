// motive so if we go to local host then it would show a x page but
// if we change the url it should show some another page as response

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
    }else if(url === '/swayam'){ // it his is pointing to this 
        res.write("<html>");
    res.write("<head>");
    res.write("<title>Admin</title>");
    res.write("</head>");
    res.write("<body><h1>Rasta bhatak gaya hey tu</h1></body>");
    res.write("</html>");
    return res.end();
    }else{ // nahi to
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Admin</title>");
    res.write("</head>");
    res.write("<body><h1>Chale jaa </h1></body>");
    res.write("</html>");
    return res.end();
    }
    
});

app.listen(3000);