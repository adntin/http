# 运行 node 服务时，需要先 cd 到执行文件目录，否则读取 index.html 路径有问题。

1. cd cache/strong
2. node server.js

# Cache-Control

## 可缓存性

- public: 所有经过路径都可以缓存, 比如: 浏览器, 代理服务器
- private: 只有发起端(浏览器)可以缓存, 代理服务器(nginx)不可以缓存
- no-cache: 浏览可以缓存, 但是每次都需要通过服务器验证, 如果可以使用, 才能使用本地缓存
- no-store: 任何经过路径都不能缓存, 比如: 浏览器, 代理服务器

## 到期

- max-age: 设置缓存时间, 单位秒
- s-max-age: 代理服务器才会生效, 代替 max-age
- max-stale: 发起端设置此值, 即使 max-age 过期, 也会使用本地缓存

## 重新验证

- must-revalidate: 当 max-age 过期后, 必须从源服务器获取
- proxy-revalidate: 当 max-age 过期后, 必须从指定代理服务器获取

## 其它

- no-transform: 转换, 比如: 资源太大, 代理服务器帮我们压缩
