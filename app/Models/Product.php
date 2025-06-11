<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    //
    protected $fillable = [
        'name',
        'short_description',
        'long_description',
        'price',
        'disabled_at',
        'images',
        'specifications',
        'variations',
        'stock_status',
        'sku',
    ];

    protected $casts = [
        'images' => 'array',
        'specifications' => 'array',
        'variations' => 'array',
        'price' => 'decimal:2',
    ];
}
