<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products'; // nombre de la tabla

    protected $fillable = [
        'sku',
        'creation_date',
        'update_date',
        'image',
        'name',
        'description',
        'discount',
        'stock',
        'price',
        'visible',
        'seller_id',
    ];

    // 🔗 Relación: un producto pertenece a un vendedor
    public function seller()
    {
        return $this->belongsTo(Seller::class, 'seller_id');
    }
}
