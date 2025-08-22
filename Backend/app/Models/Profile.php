<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles'; // Nombre de la tabla

    protected $fillable = [
        'username',
        'name',
        'last_name',
        'email',
        'password',
        'type',
        'image',
    ];

    protected $hidden = [
        'password', // Ocultar password en JSON
    ];

    // 🔗 Aquí puedes añadir relaciones después si tienes usuarios, vendedores, etc.
}
