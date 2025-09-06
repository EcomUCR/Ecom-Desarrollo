<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    /**
     * Listar vendors con user, redes sociales y productos.
     */
    public function index()
    {
        $vendors = Vendor::with(['user', 'socialMedia', 'products'])->paginate(10);
        return response()->json($vendors);
    }

    /**
     * Crear un nuevo vendor.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id'       => 'required|exists:users,id',
            'name'          => 'required|string|max:32',
            'description'   => 'nullable|string',
            'address'       => 'nullable|string|max:150',
            'phone_number'  => 'nullable|string|max:24',
            'logo'          => 'nullable|string',
            'profile_image' => 'nullable|string',
            'banner_image'  => 'nullable|string',
        ]);

        $vendor = Vendor::create($validated);

        return response()->json($vendor->load(['user', 'socialMedia', 'products']), 201);
    }

    /**
     * Mostrar un vendor específico.
     */
    
    public function show(Vendor $vendor)
    {
        return response()->json($vendor->load(['user', 'socialMedia', 'products']));
    }

    /**
     * Actualizar un vendor.
     */
    public function update(Request $request, Vendor $vendor)
    {
        $validated = $request->validate([
            'name'          => 'string|max:32',
            'description'   => 'nullable|string',
            'address'       => 'nullable|string|max:150',
            'phone_number'  => 'nullable|string|max:24',
            'logo'          => 'nullable|string',
            'profile_image' => 'nullable|string',
            'banner_image'  => 'nullable|string',
        ]);

        $vendor->update($validated);

        return response()->json($vendor->load(['user', 'socialMedia', 'products']));
    }

    /**
     * Eliminar un vendor.
     */
    public function destroy(Vendor $vendor)
    {
        $vendor->delete();
        return response()->json(null, 204);
    }
}
