const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    const { url } = request;
    if (url === "/") {
      const html = fs.readFileSync("index.html", "utf8");
      response.writeHead(200, {
        "Content-Type": "text/html",
        Connection: "close",
        // 路径必须跟请求路径一样
        Link: "</avatar.jpg>; as=image; rel=preload"
      });
      response.end(html);
    } else {
      const jpg = fs.readFileSync("avatar.jpg"); // Buffer 二进制
      response.writeHead(200, {
        "Content-Type": "image/jpg",
        Connection: "close"
      });
      response.end(jpg);
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
