const http = require("http");
const fs = require("fs");

const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, 1000 * seconds));
};

http
  .createServer(function(request, response) {
    const { url } = request;
    if (url === "/") {
      const html = fs.readFileSync("index.html", "utf8");
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(html);
    }
    if (url === "/api") {
      response.writeHead(200, {
        "Cache-Control": "max-age=20"
      });
      wait(2).then(() => {
        response.end("from database fetch data success");
      });
    }
  })
  .listen(8888);

console.log("client listening 8888 port");
