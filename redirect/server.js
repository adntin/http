const http = require("http");

http
  .createServer(function(request, response) {
    const { url } = request;
    console.log(Date.now(), url);
    if (url === "/") {
      // 302: Found, 临时重定向, 浏览器每次都会询问服务器需要跳转到哪里
      response.writeHead(302, {
        Location: "/news"
      });
      // 301: Moved Permanently, 永久重定向, 浏览器不会询问服务器, 谨慎使用
      // response.writeHead(301, {
      //   Location: "/news"
      // });
      response.end("");
    }
    if (url === "/news") {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end("<div>this is content</div>");
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
