## 第三方 acme.sh 脚本

```shell
curl https://get.acme.sh | sh
source ~/.bashrc
acme.sh --register-account -m 你的邮箱
# ZeroSSL 上次有报错，改为 letsencrypt
acme.sh --set-default-ca --server letsencrypt
```

## 使用方式一：DNS（推荐）

以 GANDI 和泛解析为例

```shell
export GANDI_LIVEDNS_KEY=输入您的密钥
acme.sh --issue --dns dns_gandi_livedns -d 输入您的域名 -d *.输入您的域名
```

## 使用方式二：非 DNS

⚠️：非 DNS 方式不能泛解析

### 没有 web 服务器

```shell
apt-get install socat
sudo ~/.acme.sh/acme.sh  --issue  -d example.com -d www.example.com   --standalone
```

### 有 web 服务器

`sudo ~/.acme.sh/acme.sh  --issue  -d example.com -d www.example.com  --webroot  /var/www/laravel/public/`

## bug

近期提示：Usage: _hmac hashalg secret [outputhex]

临时解决：带上参数 --server letsencrypt

## SSL 工具

-   https://www.ssllabs.com/index.html # 查询证书安全级别，最高 A+
-   [https://crt.sh/?q=域名](https://crt.sh/?q=%E5%9F%9F%E5%90%8D) # 查询你的域名证书申请情况
-   https://mozilla.github.io/server-side-tls/ssl-config-generator/ # 自动构建 Web Server 的配置文件
-   https://www.chinassl.net/ # 综合工具
-   [Guide to Deploying Diffie-Hellman for TLS](https://weakdh.org/sysadmin.html)
-   [https://hstspreload.org](https://hstspreload.org/)
-   [安装 SSL](https://sg.godaddy.com/zh/help/ssl-16623)

## 参考

-   https://letsencrypt.org/
-   https://certbot.eff.org/
-   http://acme.sh/
