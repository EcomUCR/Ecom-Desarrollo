<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    // GET /api/profiles/{id}
    public function show($id)
    {
        $user = User::find($id);

        // Depuración: Verifica los datos del usuario
        \Log::info('Datos del usuario:', $user ? $user->toArray() : []);

        if (!$user) {
            return response()->json(['message' => 'Perfil no encontrado'], 404);
        }

        return response()->json([
            'id' => $user->id,
            'username' => $user->username,
            'name' => $user->name,
            'last_name' => $user->last_name,
            'image' => $user->image, // Asegúrate de tener este campo en tu tabla users
        ]);
    }
}
