const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    const { url } = request;
    // load index.html
    if (url === '/') {
      const html = fs.readFileSync("index.html", "utf8");
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(html);
    }
    // load abc.js
    if (url === '/abc.js') {
      response.writeHead(200, {
        "Content-Type": "text/javascript",
        'Cache-Control': 'max-age=5, public' // 单位秒
      });
      response.end('console.log("abc.js loaded!")')
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
