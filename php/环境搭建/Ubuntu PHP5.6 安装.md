## PHP


```shell
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php5.6-fpm
sudo apt install php5.6-mbstring php5.6-mcrypt php5.6-mysql php5.6-xml
```

## Nginx


```shell
sudo apt install nginx-full
```

## MySQL 5.7


```shell
wget https://dev.mysql.com/get/mysql-apt-config_0.8.12-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.12-1_all.deb
sudo apt-get update
sudo apt-cache policy mysql-server
sudo apt install -f mysql-client=5.7.33-1ubuntu18.04 mysql-community-server=5.7.33-1ubuntu18.04 mysql-server=5.7.33-1ubuntu18.04
sudo apt install mysql-client mysql-server
sudo mysql_secure_installation
```

## 参考

* https://askubuntu.com/questions/756181/installing-php-5-6-on-xenial-16-04
* https://askubuntu.com/questions/998920/1698-access-denied-for-user-rootlocalhost-mysql-5-7-and-ubuntu-16-04
* https://computingforgeeks.com/how-to-install-mysql-on-ubuntu-focal/
