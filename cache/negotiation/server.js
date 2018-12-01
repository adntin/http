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
      const etag = request.headers['if-none-match'];
      if (etag === '456') {
        // 状态码: 304
        response.writeHead(304, {
          "Content-Type": "text/javascript",
          'Cache-Control': 'max-age=500000000, no-cache', // 前提条件: 浏览器长期缓存文件, 但是每次使用需要通过服务器验证
          'Last-Modified': '123',
          'Etag': '456'
        });
        // 不返回内容
        response.end(''); // 如果些处返回新内容, 浏览器也会使用之前缓存的旧内容
      } else {
        response.writeHead(200, {
          "Content-Type": "text/javascript",
          'Cache-Control': 'max-age=500000000, no-cache', // 前提条件: 浏览器长期缓存文件, 但是每次使用需要通过服务器验证
          'Last-Modified': '123',
          'Etag': '456'
        });
        response.end('console.log("abc.js loaded!")');
      }
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
