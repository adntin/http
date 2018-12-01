只要 nginx 缓存过, 其他人访问就直接从 nginx 缓存返回

Vary: X-Test-Cache
表示请求 URL 和请求头信息一样才会被缓存
应用场景, 根据 User Agent 返回不一样的数据
