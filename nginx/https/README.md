- 证书生成命令
- openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem

- 把生成的两个文件放到
- /usr/local/etc/openssl/certs
