const fs = require("fs");
const http = require("http");

const app = http.createServer((req,res)=>{
    res.setHeader("Content-type","Text-html");
    const url = req.url; 
    const method = req.method;// will store which type of method we are using
    if(url === '/'){ 
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Admin</title>");
    res.write("</head>");
    res.write('<body><form action="/file" method="POST" name="msg"><input type="text" name="msg"/><button type="submit">Submit</button></form></body>');
    res.write("</html>");
    return res.end(); 
    }else if(url === '/file' && method ==="POST"){ 
        const body = [];
        // jab bhi hamare pass data aye ye below functiobn ko call karne ka baat ho raha
        req.on("data",(chunk)=>{
            console.log(chunk); // chote chote chunk wala data show hoga < 6d 73 ....>
            body.push(chunk);
        });

        /* If you notice we have written return in front of req.on() function cause 
        we want our node js stop and return this response cause node js is async then he wont wait
        for this event to get execute and if he finds something below this function which responds to
        client side then he will return that response which is wrong reffer to 1.20.00 */
        //Agar aur data aya to buffer me store hote hey wo usko kese access kare wo ye below function batata hey
        return req.on("end",()=>{ // jese hi end wala function run hua hum
            const parseBody = Buffer.concat(body).toString();// buffer me jo bhi data hey use concat karo 
            const message = parseBody.split('=')[1]; // hum msg=swayam hu bhai nahi chahiye isliye "=" ke pehle wala split karke text file me store karenge
            // console.log(parseBody); // print kardo
            fs.writeFileSync("stremFile.txt",message); // writeFileSunc() bata raha ki ye function ka pura wait karo jab tak ye write na kare text file me (synchronous behaviour) called as blocking code
        });
        fs.writeFileSync("NewFile.txt","Helloooo"); 
        res.statusCode=302; 
        res.setHeader("Location","/"); 
        res.end(); 
    }
});

app.listen(3000);