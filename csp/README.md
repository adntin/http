# 运行 node 服务时，需要先 cd 到执行文件目录，否则读取 index.html 路径有问题。

1. cd csp
2. node server.js

Content Security Policy: 内容安全策略

# 注意

1. self 需要单引号
2. report 是 uri, 不是 url

# 服务端设置响应头

- "Content-Security-Policy": "script-src 'self'"
- default-src: 全局限制(所有跟链接有关的限制)
- script-src: 脚本限制
- style-src: 样式限制
- connect-src: ajax 限制
- img-src
- font-src
- frame-src
- media-src
- manifest-src
- ...

# 浏览器通过 meta 可以设置 CSP, 但是没有上报功能

- <meta http-equiv="Content-Security-Policy" content="script-src 'self';" />
