---
sidebar_position: 2
---

# 快速开始

## 下载

```shell
git clone https://github.com/likunyan/spider-api
cd spider-api
mkdir cache
php artisan spider example.com
```

## 配置文件

需要采集的站点，放在 configs/sites/ 下，名字自取，但是后续执行命令的时候，需要根据这个文件名来执行。 

假如需要采集 example.com，那么可以取名为 example.com.php，然后执行 `php artisan spider example.com`

### 配置文件范例

```php
<?php

return [
    'tasks' => [
        [
            'name' => '文章',
            'url' => 'http://www.example.com',
        ],
    ],
];
```
