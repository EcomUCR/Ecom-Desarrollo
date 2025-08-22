<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{

    protected $table = 'sellers'; 

    protected $fillable = [
        'name',
        'description', 
        'address',     
        'image',
        'profile_id',
    ];

    // 🔗 Relación: un vendedor pertenece a un perfil
    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id', 'username');
    }

    // 🔗 Relación: un vendedor puede tener muchos productos (si creas tabla productos)
    public function products()
    {
        return $this->hasMany(Product::class, 'seller_id');
    }
}
