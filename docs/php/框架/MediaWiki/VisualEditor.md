 ## 安装 parsoid
 
 ```shell
 sudo apt-key advanced --keyserver keys.gnupg.net --recv-keys 90E9F83F22250DD7
 sudo apt-get install software-properties-common
 sudo apt-add-repository "deb https://releases.wikimedia.org/debian jessie-mediawiki main"
 sudo apt update
 sudo apt install apt-transport-https
 sudo apt update && sudo apt install parsoid
 修改 /etc/mediawiki/parsoid/config.yaml 中的 url 参数值
# 改为 你的网站/api.php 格式
# 比如，https://example.com/api.php
```

## VisualEditor

下载 VisualEditor 扩展

配置 LocalSettings.php，添加

```php
wfLoadExtension( 'VisualEditor' );
$wgDefaultUserOptions['visualeditor-enable'] = 1;
$wgVisualEditorParsoidURL = 'http://localhost:8142';
```

重启 parsoid

```shell
service parsoid restart
```
