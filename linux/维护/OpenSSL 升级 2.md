1. 从 https://www.openssl.org/source/ 下载
2. ./config shared zlib --openssldir=/usr/local/ssl
3. yum install -y zlib zlib-devel gcc
4. make && make install
5. mv /usr/bin/openssl /usr/bin/openssl.bak
6. mv /usr/include/openssl /usr/include/openssl.bak
7. ln -s /usr/local/ssl/bin/openssl /usr/bin/openssl
8. ln -s /usr/local/ssl/include/openssl /usr/include/openssl
9. echo "/usr/local/ssl/lib" >> /etc/ld.so.conf
10. ldconfig -v
11. openssl version -a
