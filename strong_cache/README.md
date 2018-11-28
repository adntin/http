# 运行node服务时，需要先cd到执行文件目录，否则读取indx.html路径有问题。
1. cd strong_cache
2. node server.js

# Cache-Control

## 可缓存性
public: 所有经过路径都可以缓存, 比如: 浏览器, 代理服务器
private: 只有发起请求的浏览器才可以缓存
no-cache: 浏览可以缓存, 但是每次都需要通过服务器验证, 如果可以使用, 才能使用本地缓存
no-store: 任何经过路径都不能缓存, 比如: 浏览器, 代理服务器

## 到期
max-age: 设置缓存时间, 单位秒
s-max-age: 代理服务器才会生效, 代替max-age
max-stale: 发起端设置此值, 即使max-age过期, 也会使用本地缓存

## 重新验证
must-revalidate: 当max-age过期后, 必须从源服务器获取
proxy-revalidate: 当max-age过期后, 必须从指定代理服务器获取

## 其它
no-transform: 转换, 比如: 资源太大, 代理服务器帮我们压缩