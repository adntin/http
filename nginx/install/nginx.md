# 安装 Nginx

brew install nginx

# 打开隐藏目录

command + shift + .

# 安装 nginx

```
==> Caveats (说明)

Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launched start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx

==> Summary (摘要)
🍺  /usr/local/Cellar/nginx/1.15.7: 23 files, 1.4MB
```

# 安装 nginx, 依赖 openssl

```
==> Caveats (说明)
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

openssl is keg-only, which means it was not symlinked into /usr/local,
because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have openssl first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl/include"

==> Summary (摘要)
🍺 /usr/local/Cellar/openssl/1.0.2q: 1,794 files, 12.3MB
```

# 安装 nginx, 依赖 pcre

```
🍺  /usr/local/Cellar/pcre/8.42: 204 files, 5.3MB
```
