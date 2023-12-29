##  环境

* 服务器：Ubuntu 18.04 LTS
* 本地开发环境：macOS

##  服务器安装 Ngrok

###  前提安装


```shell
sudo apt-get install build-essential mercurial git
```

###  下载 Ngrok 主程序


```shell
git clone https://github.com/tutumcloud/ngrok.git ngrok
```

###  生成证书

将 ngrok.example.com 改为您的域名


```shell
NGROK_DOMAIN=ngrok.example.com
openssl genrsa -out base.key 2048
openssl req -new -x509 -nodes -key base.key -days 10000 -subj /CN=$NGROK_DOMAIN -out base.pem
openssl genrsa -out server.key 2048
openssl req -new -key server.key -subj /CN=$NGROK_DOMAIN -out server.csr
openssl x509 -req -in server.csr -CA base.pem -CAkey base.key -CAcreateserial -days 10000 -out server.crt
cp base.pem assets/client/tls/ngrokroot.crt
```

###  生成 Ngrok 的 Linux 客户端、服务器


```shell
cd ngrok
sudo make release-server release-client
```

如果成功，./bin/ 会有 ngrok（客户端程序）、ngrokd（服务端程序） ，这两个可执行文件。

###  运行 Ngrok


```shell
sudo ./bin/ngrokd -tlsKey=server.key -tlsCrt=server.crt -domain=ngrok.example.com -httpAddr=:8081 -httpsAddr=:8082
```

##  本机使用 Ngrok

###  另外生成 Ngrok 的 macOS 客户端、服务器

由于是 macOS，需要另外在服务器上指定环境变量再生成一个 macOS 用的客户端。


```shell
sudo GOOS=darwin GOARCH=amd64 make release-server release-client
```

生成的文件在 ./bin/ darwin_amd64/，下载到本地使用。

###  添加配置文件

下载好，在同级目录下，添加 ngrok.cfg 文件。


```shell
server_addr: ngrok.example.com:4443
trust_host_root_certs: false
```

###  本机运行 Ngrok


```shell
./ngrok -subdomain pub -proto=http -config=ngrok.cfg 80
```

这里指定了一个子域名：pub，这样子访问的是 pub.ngrok.example.com，再加上服务器上的 8081，最终是 pub.ngrok.example.com:8081

##  参考

http://ngrok.cn/docs.html
