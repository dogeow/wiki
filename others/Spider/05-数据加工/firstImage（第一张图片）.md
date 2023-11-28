正文可能有若干图片，也有可能没有任何图片。

如果有的话，会提取第一张图片的地址，没有则返回空字符串。

```php
[
    'name' => '正文',
    'xpath' => "//div[@id='content']",
    // highlight-start
    'handle' => [
        'firstImage'
    ],
    // highlight-end
],
