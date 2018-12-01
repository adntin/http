# 安装 nginx

brew install nginx

# 查看 nginx 版本

nginx -v

# 启动 nginx 服务

brew services start nginx

# 重启 nginx 服务

brew services restart nginx

# 关闭 nginx 服务

brew services stop nginx

# 重新加载 nginx

nginx -s reload

# 停止 nginx

nginx -s stop

# 创建某域名配置

1. cd /usr/local/etc/nginx/servers/
2. touch test.conf
