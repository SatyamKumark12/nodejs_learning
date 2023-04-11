const http = require('http');

 // By Normal Create server Call

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello This is a Node Js Basic Server</h1>");
//     resp.end();
// }).listen(4500);


// By Arrow Function 
 
const handleServer = (req ,resp) => {
    resp.write("<h1>Hello This is a Node Js Basic Server</h1>");
    resp.end();
}

http.createServer(handleServer).listen(4500);

