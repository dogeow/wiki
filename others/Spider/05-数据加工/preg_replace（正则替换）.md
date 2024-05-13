比如采集到的信息是：
- 你好，世界
- 你好，小李
- 你好，Sam

而我们需要：

- 世界，你好
- 小李，你好
- Sam，你好

即在 `,` 的左右调换两边的位置

写法范例：

```php
[
    'name' => '问候语',
    'xpath' => "//h2",
    // highlight-start
    'handle' => [
        'preg_replace' => [
            'before' => '/^(.*?)，(.*?)$/',
            'after' => '$2，$1',
        ],
    ],
    // highlight-end
],
```
