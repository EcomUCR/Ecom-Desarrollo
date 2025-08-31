<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = ['name', 'description', 'address', 'phone_number', 'logo', 'profile_image', 'banner_image', 'profile_id'];

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id', 'username');
    }

    public function socialMedia()
    {
        return $this->hasMany(SocialMedia::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
