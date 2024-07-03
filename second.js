const http = require("http");

const server = http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':"text/html"})
    resp.write("<h1>Hello world junaid</h1>")
    resp.write("<h2> junaid</h2>")
    resp.write("<button>Click Me</button>")
    resp.end("okay bye")

}).listen(9090)


