## CDN

### 获取cdn真实ip

```nginx
set_real_ip_from 0.0.0.0/0;
real_ip_header X-Forwarded-For;
```

> 适用于阿里云
