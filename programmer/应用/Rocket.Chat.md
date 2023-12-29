https://rocket.chat/download

##  安装

###  普通安装
```bash
sudo snap set rocketchat-server caddy-url=https://域名
sudo snap set rocketchat-server caddy=enable
sudo snap set rocketchat-server https=enable
sudo rocketchat-server.initcaddy
```

###  Docker

####  debug
放到 /etc/rc.local 会超时，默认为 60：

`COMPOSE_HTTP_TIMEOUT=200 docker-compose up`<ref>https://stackoverflow.com/questions/36488209/how-to-override-the-default-value-of-compose-http-timeout-with-docker-compose-co</ref>

开机启动：

screen -dmS Chat /bin/bash -c 'cd /var/www/rocket.chat;COMPOSE_HTTP_TIMEOUT=1200 /usr/local/bin/docker-compose up;exec /bin/bash'

##  Nginx 示例
```nginx
server {
        listen 443 ssl;
        server_name 域名;

        error_log /var/log/nginx/rocketchat_error.log;

        ssl_certificate /root/.acme.sh/域名/fullchain.cer;
        ssl_certificate_key /root/.acme.sh/域名/域名.key;
        ssl_dhparam /etc/nginx/dhparams.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_prefer_server_ciphers on;
        ssl_session_cache shared:SSL:20m;
        ssl_session_timeout 180m;

        location / {
            proxy_pass http://域名:3000/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forward-Proto http;
            proxy_set_header X-Nginx-Proxy true;
            proxy_redirect off;
        }
    }
```

###  附加
```nginx
server {
  listen 80;
  server_name 域名;
  rewrite ^ https://$server_name$request_uri? permanent;
}
```

##  定时删除聊天信息
```bash
#!/bash/bin
mongo 127.0.0.1:27017<<EOF
use parties;
db.rocketchat_message.remove({});
exit;
EOF
```0 6 * * * sh /root/delete.sh

##  参考 
<references />
[[分类:精华]]
