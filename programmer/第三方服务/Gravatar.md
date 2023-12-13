## 格式

https://域名/avatar/邮箱的MD5

## 参数
* d 找不到时的图像
* s 尺寸

## 🌰

```
"https://gravatar.loli.net/avatar/" .md5(strtolower(trim(邮箱)))."?d=".urlencode('替换图片')."&s=80";
```
