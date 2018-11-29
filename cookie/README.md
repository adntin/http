# 运行 node 服务时，需要先 cd 到执行文件目录，否则读取 index.html 路径有问题。

1. cd cache
2. node server.js

# Set-Cookie

key=value: 键值对
max-age: 设置 cookie 过期时间, 单位秒, 可以在控制台(Application, Console)验证, document.cookie
HttpOnly: 浏览器不可读取, 只有服务器可以读取, 可以在控制台(Application, Console)验证, document.cookie
domain: 只能设置当前域的 cookie, 二级域名想用一级域名的 cookie, 需要先访问一级域名
