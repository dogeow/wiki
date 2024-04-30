```shell
sudo vim /etc/apt/sources.list.d/mysql.list
# 添加
deb http://repo.mysql.com/apt/ubuntu/ bionic mysql-apt-config
deb http://repo.mysql.com/apt/ubuntu/ bionic mysql-5.7
deb http://repo.mysql.com/apt/ubuntu/ bionic mysql-tools
#deb http://repo.mysql.com/apt/ubuntu/ bionic mysql-tools-preview
deb-src http://repo.mysql.com/apt/ubuntu/ bionic mysql-5.7
sudo mysql_secure_installation

sudo apt update

# 有错误时，执行以下。76F1A20FF987672F 非固定，具体看sudo apt update的提示
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 76F1A20FF987672F
sudo apt update

sudo apt-cache policy mysql-server

# 版本看提示
sudo apt install mysql-client=5.7.42-1ubuntu18.04
sudo apt install mysql-server=5.7.42-1ubuntu18.04

sudo mysql_secure_installation
```

```shell
```