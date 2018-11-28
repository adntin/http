const http = require("http");

http
  .createServer((request, response) => {
    response.end("123");
  })
  .listen(8888);

console.log("server listening 8888 port");
