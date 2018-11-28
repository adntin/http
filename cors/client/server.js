const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    const html = fs.readFileSync("index.html", "utf8");
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end(html);
  })
  .listen(8888);

console.log("client listening 8888 port");
