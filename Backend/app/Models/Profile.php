<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'username',
        'name',
        'last_name',
        'type',
        'image',
        'status',
    ];

    // Relación inversa
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

