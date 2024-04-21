const http = require('http'); //calls the http module from the core module
const server = http.createServer((req,res)=>{
    console.log(req.url);    
});// used to create a server
server.listen(2000);