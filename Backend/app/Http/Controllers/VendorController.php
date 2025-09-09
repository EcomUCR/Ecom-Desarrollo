<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{

    public function index()
    {
        $vendors = Vendor::with(['user', 'socialMedia'])->paginate(10);
        return response()->json($vendors);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'address' => 'nullable|string|max:150',
            'phone_number' => 'nullable|string|max:24',
            'logo' => 'nullable|string',
            'profile_image' => 'nullable|string',
            'banner_image' => 'nullable|string',
        ]);

        $vendor = Vendor::create($validated);

        return response()->json($vendor->load(['user', 'socialMedia']), 201);
    }


    public function show($id)
    {
        $vendor = Vendor::with(['user', 'socialMedia', 'products.images', 'products.categories'])
            ->findOrFail($id);

        return response()->json($vendor);
    }


    public function update(Request $request, $id)
    {
        $vendor = Vendor::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:100',
            'description' => 'nullable|string',
            'address' => 'nullable|string|max:150',
            'phone_number' => 'nullable|string|max:24',
            'logo' => 'nullable|string',
            'profile_image' => 'nullable|string',
            'banner_image' => 'nullable|string',
        ]);

        $vendor->update($validated);

        return response()->json($vendor->load(['user', 'socialMedia']));
    }

    public function destroy($id)
    {
        $vendor = Vendor::findOrFail($id);
        $vendor->delete();

        return response()->json(['message' => 'Vendor eliminado correctamente']);
    }


    public function products($id)
    {
        $vendor = Vendor::with(['products.images', 'products.categories'])
            ->findOrFail($id);

        return response()->json($vendor->products);
    }
}
