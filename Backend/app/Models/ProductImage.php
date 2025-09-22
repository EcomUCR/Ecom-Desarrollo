<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = ['product_id', 'url', 'order'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // 🔹 Devolver URL completa automáticamente
    public function getUrlAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
