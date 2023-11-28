只在

type 为 array 值有效。

比如

```php
[
    'name' => '标签',
    'xpath' => "//div[@id='tags']",
    // highlight-start
    'type' => 'array',
    'handle' => [
        'join' => ','
    ],
    // highlight-end
],
