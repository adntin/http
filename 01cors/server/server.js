const http = require("http");

http
  .createServer((request, response) => {
    // 注意: 
    // 1. Access-Control-Allow-Origin 只允许设置一个域名
    // 2. 实际开发中, 根据request请求的URL动态设置
    response.writeHead(200,{
      // 'Access-Control-Allow-Origin': '*'
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
      'Access-Control-Allow-Headers': 'My-Token, My-Random',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-MAX-Age': '5', // OPTIONS 5 秒内不会请求
    })
    response.end("123");
  })
  .listen(8889);

console.log("server listening 8889 port");
