const http = require("http");
const url = require("url");

http.createServer((request,respone) =>{

    console.log(request.url);
    const urlOb = url.parse(request.url);
    console.log(urlOb);

    console.log(urlOb.query.keywords);
    
}).listen(8082);