## 命令

* npm install <packageName> --f[orce]
  **npm install npm@latest -g
* npm update <packageName>

* npm -v #显示版本，检查npm 是否正确安装。
* npm install -g express #全局安装express模块
* npm list #列出已安装模块
* npm show express #显示模块详情
* npm update #升级当前目录下的项目的所有模块
* npm update -g [express]
* npm uninstall [package name] -global

* npm view 的别名
  **npm info react
  **npm show react
  **npm v react

与 <nowiki>https://registry.npmjs.org/react，或</nowiki> <nowiki>https://registry.npmjs.org/react/v0.14.6</nowiki> 一致

## 信息

* npm config get cache
* npm cache ls
* npm cache clean
* /usr/local/lib/node_modules

## 源
npm config set registry https://registry.npm.taobao.org

npm config get registry 或 npm info express

配置好这个也能解决 create-react-app 慢的问题

## 库

* https://www.npmjs.com/package/nodemon

## 代码常用包

* normalize
* axios
* moment
* vue
  **vue-i18n
  **vue-axios
  **vue-resource
  **element-ui
* React
* lodash
* webpack
  **webpack-cli
  **webpack-contrib / webpack-bundle-analyzer
* babel
  **babel-plugin-syntax-dynamic-import
* laravel-mix
