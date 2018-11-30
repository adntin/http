const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

http
  .createServer(function(request, response) {
    const { url } = request;
    // const html = fs.readFileSync("index.html", "utf8");
    const html = fs.readFileSync("index.html");
    response.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Encoding": "gzip"
    });
    response.end(zlib.gzip(html));
  })
  .listen(8888);

console.log("client listening 8888 port");
