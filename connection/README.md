# 运行 node 服务时，需要先 cd 到执行文件目录，否则读取 index.html 路径有问题。

1. cd connection
2. node server.js

# 演示设置

1. Chrome --> Network --> 列表右键 --> Connection ID
2. Chrome --> Network --> Online --> Fast 3G

# Connection

1. keep-alive: 保持长连接
2. close: 请求完成后就关闭, 每个 TCP 连接只有一个 HTTP 请求

# Keep-Alive

1. timeout: 指定了一个空闲连接需要保持打开状态的最小时长（以秒为单位）。
2. max: 在连接关闭之前，在此连接可以发送的请求的最大值。

# 知识点

Chrome 创建 TCP 连接可以同时支持 6 个并发, 同域也支持创建多个 TCP 连接.
HTTP/1.1 在同一个 TCP 连接里, HTTP 请求是串行的.
HTTP/2.0 在同一个 TCP 连接里, HTTP 请求可以并行. 信道复用, 只需要一个连接, 比如: www.google.com
浏览器多域, 为了节省服务器带宽, 但是解析 DNS 需要更多时间
