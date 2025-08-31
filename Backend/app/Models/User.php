<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\Passwords\CanResetPassword;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, CanResetPassword;

    protected $fillable = ['email', 'password'];
    protected $hidden = ['password'];

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function vendor()
    {
        return $this->hasOne(Vendor::class);
    }
}

