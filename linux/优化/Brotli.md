## 注意事项

只支持 HTTPS

## 安装

<https://github.com/google/ngx_brotli>

cd ../ngx_brotli && git submodule update --init

## 测试

curl -s -I -H 'Accept-Encoding: br,gzip,deflate' http://wiki2.dogeow.com

## 遇到问题？

### the HTTP rewrite module requires the PCRE library

`apt-get install libpcre3-dev`

### SSL modules require the OpenSSL library

apt-get *install openssl* libssl-dev
