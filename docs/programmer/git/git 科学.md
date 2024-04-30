## git

```
# 查看

```
git config --get http.proxy
git config --get https.proxy
```

# 设置
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

# 取消
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 只 GitHub

```
# 设置
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
git config --global https.https://github.com.proxy socks5://127.0.0.1:1080

# 取消
git config --global --unset http.https://github.com.proxy socks5://127.0.0.1:1080
git config --global --unset https.https://github.com.proxy socks5://127.0.0.1:1080
```
