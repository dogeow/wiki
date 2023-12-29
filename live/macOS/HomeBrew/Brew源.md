##  brew

将 Homebrew 的 git 远程仓库改为阿里云开源软件镜像

```shell
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
```

测试效果。可以打开活动监视器查看进程 git-remote-https 的已接收字节

brew update

##  core

替换 homebrew-core.git

```shell
cd $(brew --repo)/Library/Taps/homebrew/homebrew-core
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

##  bottles

替换 homebrew-bottles

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

##  恢复全部

```shell
# 重置 brew.git:
cd $(brew --repo)
git remote set-url origin https://github.com/Homebrew/brew.git

# 重置 homebrew-core:
cd $(brew --repo)/Library/Taps/homebrew/homebrew-core
git remote set-url origin https://github.com/Homebrew/homebrew-core.git

# 重置 homebrew-bottles
# 删除 ~/.zshrc 中 HOMEBREW_BOTTLE_DOMAIN 的内容
```

## 源列表

1. https://mirrors.aliyun.com/homebrew/brew.git - 阿里云

2. https://git.coding.net/homebrew/homebrew.git - Coding

##  参考

* https://xu3352.github.io/mac/2018/09/06/mac-homebrew-update-slowly
* http://www.zuobin.net/2018/01/604.html
