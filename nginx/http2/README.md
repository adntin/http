- nginx 可以同时兼容 HTTP/2 和 HTTP/1.1
- nginx 代理和 node 服务一般在内网或者同一台机器, 没有创建连接性能问题

# 测试 http2 性能

- https://http2.akamai.com/demo/http2-lab.html

# 协商使用 HTTP/2 或者 HTTP/1.1, 根据 ALPN 判断, 证书不安全需要加 -k 参数

- curl -v -k https://test.com

# 强制使用 HTTP/1.1

- curl -v -k --http1.1 https://test.com
