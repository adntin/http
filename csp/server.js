const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    const { url } = request;
    if (url === "/") {
      const html = fs.readFileSync("index.html", "utf8");
      response.writeHead(200, {
        "Content-Type": "text/html"
        // 只允许加载[本域]的链接(js, css, img等), 不允许加载[外域]链接(js, css, img等), 不允许执行内联JS脚本, 不允许执行内联CSS样式
        // "Content-Security-Policy": "default-src 'self'"
        // 只能通过外链的形式加载js, inline script 或者 inline style 不能执行, 防止XSS攻击
        // "Content-Security-Policy": "default-src http: https:"
        // 允许本域和指定域名加载js
        // "Content-Security-Policy": "script-src 'self' https://cdn.bootcss.com/"
        // 限制form表单提交到别的域名
        // "Content-Security-Policy": "default-src 'self'; form-action 'self'"
        // 上传报表, 错误不加载, 不执行
        // "Content-Security-Policy": "default-src 'self'; report-uri /report"
        // 只上传报表, 不对错误做限制, 会加载, 会执行
        // "Content-Security-Policy-Report-Only": "script-src 'self'; report-uri /report"
      });
      response.end(html);
    }
    if (url === "/script.js") {
      response.writeHead(200, {
        "Content-Type": "application/javascript"
      });
      response.end('console.log("server script")');
    }
    if (url === "/style.css") {
      response.writeHead(200, {
        "Content-Type": "text/css"
      });
      response.end("html { font-size: 30px; }");
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
