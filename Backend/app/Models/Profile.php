<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Profile extends Model
{
    protected $primaryKey = 'username';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['username', 'first_name', 'last_name', 'email', 'password', 'type', 'avatar'];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_profile', 'username', 'email');
    }

    public function vendor()
    {
        return $this->hasOne(Vendor::class, 'profile_id', 'username');
    }
}

