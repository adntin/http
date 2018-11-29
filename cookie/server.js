const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    const { url } = request;
    const html = fs.readFileSync("index.html", "utf8");
    // 1. 设置其它
    response.writeHead(200, {
      "Content-Type": "text/html",
      // "Set-Cookie": "a=1",
      "Set-Cookie": ["a=1", "b=2; HttpOnly;", "c=3; max-age=5;"]
    });

    // 2. 设置二级域名访问一级域名cookie
    // if (url === "http://test.com/") {
    //   response.writeHead(200, {
    //     "Content-Type": "text/html",
    //     "Set-Cookie": ["d=4; domain=test.com"]
    //   });
    // }
    response.end(html);
  })
  .listen(8888);

console.log("client listening 8888 port");
