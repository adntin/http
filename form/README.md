# 运行 node 服务时，需要先 cd 到执行文件目录，否则读取 index.html 路径有问题。

1. cd form
2. node server.js

# 独有, 请求头, 浏览器期望(服务器可以不按照期望返回)

1. Accept: 期望 MIME(type/subtype) 类型, 比如 text/html,application/xhtml+xml...
2. Accept-Encoding: 期望压缩格式, 比如: gzip, deflate, br
3. Accept-Language: 期望语言, 比如: zh-CN,zh;q=0.9,en-US;q=0.8...

# 共有, 请求头 & 响应头

1. Content-Type: 内容 MIME(type/subtype) 类型, 比如: 浏览器请求头: multipart/form-data, 服务器响应头: text/html 或 image/jpg
2. Content-Encoding: 内容压缩格式, 比如: 服务器响应头: gzip
3. Content-Language: 内容语言

# Form request header Content-Type, only 3 kinds of

1. application/x-www-form-urlencoded
2. multipart/form-data
3. text/plain

# Other request header Content-Type, a lot more

1. application/json
2. application/xml
3. application/octet-stream
   ...

# 演示

1. 浏览器请求头 Accept, 服务器返回 Content-Type
2. 压缩文件 gzip, Chrome --> Network --> List --> Size, 上表示文件传输大小, 下表示文件实际大小
3. 表单提交 application/x-www-form-urlencoded 类型
4. 表单提交 multipart/form-data 类型
