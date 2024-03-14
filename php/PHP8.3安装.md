## 基础步骤

更新源、软件

```shell
sudo apt update
sudo apt upgrade
```

## PHP

### 安装新版本 PHP 8.2

```shell
# 添加源并更新
sudo apt -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update

# 安装 PHP-FPM 和扩展
sudo apt install php8.3-fpm php8.3-{mbstring,mysql,curl,xml,redis}

# 验证
sudo php-fpm8.3 -t

# 开启
sudo service php8.3-fpm restart
```

## Nginx

参见

* <https://www.nginx.com/resources/wiki/start/topics/tutorials/install/#official-debian-ubuntu-packages>
* https://nginx.org/en/linux_packages.html#instructions

```
sudo add-apt-repository ppa:ondrej/nginx
sudo apt-get update
# 建议安装完整功能版，有限流等公功能。
sudo apt install nginx-full
```

## MySQL

最新的 MySQL 软件包从 https://dev.mysql.com/downloads/repo/apt/ 查看

```shell
wget -c https://repo.mysql.com/mysql-apt-config_0.8.24-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb
apt update
apt install mysql-server mysql-client
```

```
mysql_secure_installation # 执行一些安全配置
```

> 安装后，密码在 /etc/mysql/debian.cnf，数据路径在 /var/lib/mysql

## Redis

```shell
sudo add-apt-repository ppa:redislabs/redis
sudo apt update
sudo apt install redis
sudo systemctl enable redis-server.service
sudo systemctl start redis-server.service
```

验证

```shell
sudo lsof -i:6379
# 或
ss -an | grep 6379
```

## Node.js

```shell
apt install npm
npm install -g n
n stable
```

## Swoole

```shell
sudo apt install php-pear php8.3-dev
sudo pecl install swoole
sudo apt install php8.3-swoole
```

开启 oepnssl 需要指定 openssl 路径

## 一些基础的软件

```shell
sudo apt install screen htop git zip nload
```

## 参见

1. <https://www.cloudbooklet.com/install-php-7-4-on-ubuntu/>
2. <https://www.cloudbooklet.com/upgrade-php-version-to-php-7-4-on-ubuntu/>
3. [https://www.nginx.com/resources/wiki/start/topics/tutorials/install/#official-debian-ubuntu-packages··](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/#official-debian-ubuntu-packages%C2%B7%C2%B7)
4. <https://php.watch/articles/php-8.0-installation-update-guide-debian-ubuntu>
5. <https://lynxbee.com/how-to-resolve-fatal-error-curl-curl-h-no-such-file-or-directory-for-ubuntu-linux/>
6. <https://www.swoole.co.uk/docs/get-started/installation>
7. https://www.vultr.com/docs
