## 为什么需要虚拟内存的🌰
使用 composer 安装包，当内存和虚拟内存都不够时，就会报错。一般都要设置 4G 以上的内存。

## 查看

```shell
root@dogeow:~# free -mh
              total        used        free      shared  buff/cache   available
Mem:          7.8Gi       3.7Gi       1.3Gi       114Mi       2.8Gi       3.7Gi
Swap:         4.0Gi       5.0Mi       4.0Gi
```

或者

```shell
swapon -s
```

## 创建并使用

阿里云默认没有创建虚拟内存。创建 4G 虚拟交换空间：

```shell
/bin/dd if=/dev/zero of=/var/swap bs=1G count=4
chmod 600 /var/swap
mkswap /var/swap
swapon /var/swap
echo "/var/swap none swap sw 0 0" >> /etc/fstab
# <file system> <mount point> <type> <options> <dump> <pass>
```

## 虚拟内存使用频率

Ubuntu 默认的是 `vm.swappiness=10`，就是你的内存够用，它也会使用一点点虚拟内存。

查看配置 `sysctl vm.swappiness`

> 这里必须批评下阿里云，它设置为 0，也就是说永远不会使用虚拟内存。

### 修改

```shell
sysctl vm.swappiness=10
sysctl -p
```

或

```shell
vim /etc/sysctl.conf
vm.swappiness=30
# 退出
sysctl -p
```

## 卸载

```shell
# 保存
sync
# 卸载全部
swapoff -a
# 或卸载部分
# swapoff /var/swap
```

## 开启

```shell
# 全部
swapon -a
# 或开启部分
# swapon /var/swap
```
