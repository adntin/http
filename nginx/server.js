const http = require("http");

http
  .createServer(function(request, response) {
    console.log(Date.now(), request.headers.host);
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end("<div>this is content</div>");
  })
  .listen(8888);

console.log("client listening 8888 port");
