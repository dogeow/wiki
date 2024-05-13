## PHP

```
brew install php
```
### 信息

- 安装路径：ls -lh /usr/local/Cellar/php*
- 安装路径映射：ls -lh /usr/local/opt/php*
- php.ini：ls -lh /usr/local/opt/php*

### 开发

```shell
pecl install pcov # 代码覆盖率
pecl install xdebug # Xdebug
perl install xhprof
```

### Ubuntu 的话

```shell
apt install php8.1-pcov
apt install php8.1-xdebug
apt install php8.1-xhprof
```

## Nginx

```
brew install nginx
sudo brew services start nginx # 开机启动
```

> 虚拟主机配置文件路径：/usr/local/etc/nginx/servers

虚拟主机配置文件 Example：

```nginx
server {
    listen 80;
    server_name laravel.test;
    root /Users/你的用户名/PhpstormProjects/laravel;

    location ~ \.php$ {
        include /usr/local/etc/nginx/fastcgi.conf;
        fastcgi_intercept_errors on;
        fastcgi_pass 127.0.0.1:9000;
    }
}
```

## MySQL

```
brew install mysql
```

### MySQL 配置

```
brew services start mysql # 开机启动
# 或手动设置开机启动 https://dev.mysql.com/doc/refman/5.6/en/macos-installation-launchd.html
mysql.server start # 开启 MySQL
mysql_secure_installation # 执行一些安全配置
```

## Redis

```shell
brew install redis
brew services start redis # 开机启动
# 或手动运行
redis-server /usr/local/etc/redis.conf
```

命令行接口：`redis-cli`

> 配置文件：/usr/local/etc/redis.conf

## phpredis

```shell
git clone https://www.github.com/phpredis/phpredis.git
cd phpredis
phpize && ./configure && make && sudo make install
# 追加 extension=redis.so
brew services restart php
make test
php -r "if (new Redis() == true){ echo \"\r\n OK \r\n\"; }"
```

> 如果你有两个 PHP 版本都要安装，那么切换到另一个版本中，然后另外安装

## swoole

```sehll
export LDFLAGS="-L/usr/local/opt/openssl/lib"
export CPPFLAGS="-I/usr/local/opt/openssl/include"
pecl install swoole
```

## 备忘信息

`brew install 某某` 后的信息，如果后面想看的话，可以使用

```
brew info php
brew info mysql
brew info nginx
```
