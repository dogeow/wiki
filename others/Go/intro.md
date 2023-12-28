## 前言

[PHP 标准库函数转 Go](https://www.php2golang.com/)


## 开始
从 [https://learnku.com/go LC 社区 Go 板块]的文档起手，或其他教程：

* [https://tour.go-zh.org/moretypes/7 Go 语言之旅]
* [https://eddycjy.com/go-categories/ 跟煎鱼学 Go]
* [https://go-zh.org/doc/ Go 中文]
* [http://books.studygolang.com/The-Golang-Standard-Library-by-Example/chapter01/01.1.html Go 语言标准库], [http://cngolib.com/index.html Go 标准库中文文档]
* [https://books.studygolang.com/gopl-zh/ Go 语言圣经]
* [https://github.com/talkgo/night Go 夜读]

其他网站：

* https://studygolang.com/topics

资源

* https://learnku.com/articles/41230

[https://golang.org/ 下载]并安装 Golang

```shell
➜  ~ go version
go version go1.15.6 darwin/amd64
```

## IDE
安装 [https://www.jetbrains.com/ Jetbrains] GoLand

## 规范
自带的 gofmt 会自动格式化你的代码。

GoLand Preferences - tools - File watchers 添加 go fmt

### 先会写再看
[Go 编程规范] [https://golang.org/ref/spec 英文](https://learnku.com/go/wikis/38426)


## 科学上网
```shell
go env
# GOPROXY="https://proxy.golang.org,direct"
export GOPROXY=https://goproxy.io
```

## 框架
[https://learnku.com/docs/gin-gonic/2019 Gin], gin-jwt, '''[[GORM]]'''

## 搭配
环境变量<ref>https://towardsdatascience.com/use-environment-variable-in-your-next-golang-project-39e17c3aaa66</ref>

* viper

##  测试
go test -v ./...

## 其他

### GUI
https://learnku.com/go/t/41240

### godoc
go get golang.org/x/tools/cmd/godoc

## 参考

https://segmentfault.com/a/1190000018264719
