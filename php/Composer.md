## 安装 Composer

### 方式一

```shell
sudo apt install composer
composer -V # 验证
```

### 方式二

```shell
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
composer -V # 验证
```

## 查看当前源

```shell
composer config -gl |grep url
# [repositories.packagist.org.url] https://repo.packagist.org
```

## 全局更改源

### 阿里云

更改为阿里云提供的 Composer 镜像地址

```shell
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
composer update nothing # 更改 json 文件的网址
```

### packagist

还原到默认的 packagist 地址

```shell
composer config -g --unset repos.packagist
# 或者
composer config -g repo.packagist composer https://packagist.org
```

## Composer 本身，升/降级

### 升级

```shell
➜  ~ composer self-update
Upgrading to version 2.3.5 (stable channel).

Use composer self-update --rollback to return to version 2.2.7
```

### 降级

composer self-update –1

## 更新软件包

更新前执行下

composer outdated

## 其他

composer diagnose
