const http = require('http');

http.createServer((request, response) => {
   response.write("<h1>Hello World</h1>");
   response.end();
}).listen(3000);
console.log("Server Running...");