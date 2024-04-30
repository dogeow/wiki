[官网](https://humdi.net/vnstat/)

##  安装

```
sudo apt install -y libsqlite3-dev
# 从官网下载源码
sodu wget https://humdi.net/vnstat/vnstat-2.10.tar.gz
sodu tar -xvf vnstat-2.10.tar.gz
cd vnstat-2.10
sudo ./configure
sudo make && sudo make install
```

配置文件在 /usr/local/etc/vnstat.conf

数据保存在 /var/lib/vnstat

## 命令行

```shell
vnstat -i eth0 -l #实时流量情况
vnstat -i eth0 -h #按小时查询流量情况
vnstat -i eth0 -d #按天数查询流量情况
vnstat -i eth0 -m #按月数查询流量情况
vnstat -i eth0 -w #按周数查询流量情况
vnstat -i eth0 -t #查询TOP10流量情况
```

## GUI：vnstat PHP

http://www.sqweek.com/sqweek/index.php?p=1

记得修改 conf.php 的 vnstat 路径，/usr/bin/vnstat 改为 /usr/local/bin/vnstat
