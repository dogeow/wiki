## 简单范例

```
location / {
	proxy_pass http://域名:端口/;
	proxy_http_version 1.1;
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "upgrade";
}
```
## 范例

```
location / {
	proxy_pass http://域名:端口/;
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
```

## 参考

* http://nginx.org/en/docs/http/websocket.html
* https://www.nginx.com/blog/websocket-nginx/
