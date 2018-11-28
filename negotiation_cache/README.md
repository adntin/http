# 运行node服务时，需要先cd到执行文件目录，否则读取indx.html路径有问题。
1. cd negotiation_cache
2. node server.js

# 前提条件
Cache-Control: "max-age=99999999, no-cache"
表示: 浏览器长期缓存文件, 但是每次使用需要通过服务器验证

# 服务端返回头
1. Last-Modified
2. Etag

# 浏览器请求头
1. If-Modified-Since
2. If-None-Match

# Chrome 调试工具, 下面是相同效果
1. 勾选 Disable cache, 则不发送请求头 If-Modified-Since 和 If-None-Match
2. Cache-Control: "max-age=99999999, no-store"