这里升级到 1.1.1m。后续新版本可以替换下网址。

## 查看现有版本

```shell
openssl version
# OpenSSL 1.1.1k  25 Mar 2021
```

## 备份文件

```shell
mv /usr/bin/openssl /usr/bin/openssl.bak
```

## 下载新版本

```shell
wget https://www.openssl.org/source/openssl-1.1.1m.tar.gz
tar -xvf openssl-1.1.1m.tar.gz
cd openssl-1.1.1m
```

## 安装

```shell
./config
make
make test
make install
```

## 验证

```shell
openssl version
# -bash: /usr/bin/openssl: No such file or directory
# 它装的不是到 /usr/bin/openssl，而是 whereis openssl 中的 /usr/local/bin/openssl

/usr/local/bin/openssl version
# OpenSSL 1.1.1m  14 Dec 2021

ln -s /usr/local/bin/openssl /usr/bin/openssl
openssl version
# OpenSSL 1.1.1m  14 Dec 2021
```

## 其他

```shell
ldconfig # 重建缓存

ln -s /usr/local/lib64/libssl.so.1.1 /usr/lib64/libssl.so.1.1
ln -s /usr/local/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1
```
