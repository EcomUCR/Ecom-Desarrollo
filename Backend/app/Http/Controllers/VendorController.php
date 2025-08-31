<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    /**
     * List vendors with profile, social media and products.
     */
    public function index()
    {
        $vendors = Vendor::with(['profile', 'socialMedia', 'products'])->paginate(10);
        return response()->json($vendors);
    }

    /**
     * Store a new vendor.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'          => 'required|string|max:32',
            'description'   => 'nullable|string',
            'address'       => 'nullable|string|max:150',
            'phone_number'  => 'nullable|string|max:24',
            'logo'          => 'nullable|string',
            'profile_image' => 'nullable|string',
            'banner_image'  => 'nullable|string',
            'profile_id'    => 'required|exists:profiles,username',
        ]);

        $vendor = Vendor::create($validated);

        return response()->json($vendor->load(['profile']), 201);
    }

    /**
     * Show a vendor with relations.
     */
    public function show(Vendor $vendor)
    {
        return response()->json($vendor->load(['profile', 'socialMedia', 'products']));
    }

    /**
     * Update a vendor.
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
            'profile_id'    => 'exists:profiles,username',
        ]);

        $vendor->update($validated);

        return response()->json($vendor->load(['profile', 'socialMedia', 'products']));
    }

    /**
     * Delete a vendor.
     */
    public function destroy(Vendor $vendor)
    {
        $vendor->delete();
        return response()->json(null, 204);
    }
}
