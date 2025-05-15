# Nova Order Field

[![Latest Version on Packagist](https://img.shields.io/packagist/v/Spear/nova-order-field.svg)](https://packagist.org/packages/Spear/nova-order-field)
[![Total Downloads](https://img.shields.io/packagist/dt/Spear/nova-order-field.svg)](https://packagist.org/packages/Spear/nova-order-field)

### Description

A field that adds reordering functionality to your Laravel Nova resource's index using the [eloquent-sortable](https://github.com/spatie/eloquent-sortable) package by [Spatie](https://spatie.be).

### Demo

![Demo](https://raw.githubusercontent.com/Spear/nova-order-field/master/docs/screenshot.png)

### Installation

This package can be installed through Composer.

```bash
composer require Spear/nova-order-field
```

### Usage

1. Follow the [usage instructions](https://github.com/spatie/eloquent-sortable#usage) on the eloquent-sortable repository to make your model sortable.
2. Add the `Spear\NovaOrderField\Orderable` trait to your Nova Resource.
3. Add a public static property called `$defaultOrderField` to your resource, containing your order column.
4. Add the `OrderField` to your Nova Resource `fields` method.

### Grouping

If your model/table has a grouping field (usually a foreign key): `id, `**`user_id`**`, title, order_column`
and you'd like the above methods to take it into considerations, you can create a `buildSortQuery` method at your model:

```php
public function buildSortQuery()
{
    return static::query()->where('user_id', $this->user_id);
}
```

This will restrict the calculations to fields value of the model instance.

### Example

```php
use Spear\NovaOrderField\Orderable;
use Spear\NovaOrderField\OrderField;

class Page extends Resource
{
    use Orderable;

    public static $defaultOrderField = 'order';

    public function fields(Request $request)
    {
        return [
            OrderField::make('Order'),
        ];
    }
}
```
