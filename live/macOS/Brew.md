## homebrew

brew 安装的软件都在 /usr/local/Cellar 文件夹里。

来源于：https://segmentfault.com/a/1190000000606752

    brew update                      #更新brew可安装包，建议每次执行一下
    brew search php                  #搜索php
    brew tap josegonzalez/php        #安装扩展<gihhub_user/repo>   
    brew tap                         #查看安装的扩展列表
    brew install php                 #安装php
    brew remove  php                 #卸载php
    brew upgrade php                 #升级php
    brew options php                 #查看php安装选项
    brew info    php                 #查看php相关信息
    brew home    php                 #访问php官方网站
    brew services list               #查看系统通过 brew 安装的服务
    brew services cleanup            #清除已卸载无用的启动配置文件
    brew services restart php        #重启php-fpm

    launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist

## 换源

替换 brew.git：

    cd $(brew --repo)
    git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

替换 homebrew-core.git：

    cd $(brew --repo)/Library/Taps/homebrew/homebrew-core
    git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git 

原本为 <https://github.com/Homebrew/homebrew-core.git>

## homebrew-cask
