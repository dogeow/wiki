```php
<?php

interface Fruit {
    public function getName(): string;
}

abstract class BackedEnum {
    private static $constCacheArray = null;
    private $value;

    protected function __construct($value) {
        $this->value = $value;
    }

    public function __toString() {
        return (string) $this->value;
    }

    public static function isValidName($name, $strict = false) {
        $constants = self::getConstants();

        if ($strict) {
            return array_key_exists($name, $constants);
        }

        $keys = array_map('strtolower', array_keys($constants));
        return in_array(strtolower($name), $keys);
    }

    public static function isValidValue($value) {
        $values = array_values(self::getConstants());
        return in_array($value, $values, $strict = true);
    }

    private static function getConstants() {
        if (self::$constCacheArray == null) {
            self::$constCacheArray = [];
        }

        $calledClass = get_called_class();
        if (!array_key_exists($calledClass, self::$constCacheArray)) {
            $reflect = new ReflectionClass($calledClass);
            self::$constCacheArray[$calledClass] = $reflect->getConstants();
        }

        return self::$constCacheArray[$calledClass];
    }

    public static function toArray() {
        return self::getConstants();
    }

    public static function fromName($name) {
        if (!self::isValidName($name)) {
            throw new InvalidArgumentException("$name is not a valid name for this enum");
        }

        $constants = self::getConstants();
        return new static($constants[$name]);
    }

    public static function fromValue($value) {
        if (!self::isValidValue($value)) {
            throw new InvalidArgumentException("$value is not a valid value for this enum");
        }

        $keys = array_keys(self::getConstants());
        $values = array_values(self::getConstants());
        $index = array_search($value, $values, $strict = true);

        return new static($keys[$index]);
    }
}

final class Apple extends BackedEnum implements Fruit {
    const FUJI = 'fuji';
    const GRANNY_SMITH = 'granny smith';
    const HONEYCRISP = 'honeycrisp';

    public function getName(): string {
        return 'apple';
    }
}

final class Orange extends BackedEnum implements Fruit {
    const NAVEL = 'navel';
    const BLOOD = 'blood';
    const VALENCIA = 'valencia';

    public function getName(): string {
        return 'orange';
    }
}

$fuji = Apple::fromName('FUJI');
echo $fuji . "\n"; // outputs "fuji"
echo $fuji->getName() . "\n"; // outputs "apple"

$valencia = Orange::fromValue('valencia');
echo $valencia . "\n"; // outputs "VALENCIA"
echo $valencia->getName() . "\n"; // outputs "orange"
```

> https://www.atatus.com/blog/enums-in-php/