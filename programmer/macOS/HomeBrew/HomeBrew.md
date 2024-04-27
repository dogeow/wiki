## 安装

进 [HomeBrew](https://brew.sh/) 安装即可

## 日常使用

更新源

比如 PHP 发布 7.4 版本了，我们更新下 HomeBrew 源，就可以更新 PHP 版本了

```shell
brew update
```

范例：更新源后，更新 PHP 版本为 7.4

```shell
brew upgrade php
```

搜索软件，如 PHP

```shell
brew search php
```

更新所有可以更新的软件

```shell
brew upgrade
```

查看安装过的软件

```shell
brew list
```

运行了什么服务

```shell
brew services list
```

## 卸载

1.  brew uninstall xxx
    1.  brew uninstall --force php56-imagick
2.  brew remove xxx

手动取消开机启动

`launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist`

## 其他命令

1.  brew cleanup
2.  brew doctor

## 一些目录

-   /Library/LaunchDaemons # 开机自启，需要sudo
-   ~/Library/LaunchAgents # 用户登录后自启
