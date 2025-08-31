<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Model
{
    protected $primaryKey = 'email';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['email', 'password'];

    public function profiles(): BelongsToMany
    {
        return $this->belongsToMany(Profile::class, 'user_profile', 'email', 'username');
    }
}

