<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\User;

class ProfileController extends Controller
{
    // List all profiles
    public function index()
    {
        $profiles = Profile::with('user')->get();
        return response()->json($profiles);
    }

    // Show form for creating (API: not needed)
    public function create()
    {
        return response()->json(['message' => 'Display profile creation form']);
    }

    // Store a new profile
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'username' => 'required|unique:profiles,username',
            'name' => 'required',
            'last_name' => 'required',
            'type' => 'required',
            'image' => 'nullable|string',
        ]);

        $profile = Profile::create($validated);
        return response()->json($profile, 201);
    }

    // Show a profile
    public function show(string $id)
    {
        $profile = Profile::with('user')->findOrFail($id);
        return response()->json($profile);
    }

    // Show form for editing (API: not needed)
    public function edit(string $id)
    {
        return response()->json(['message' => 'Display profile edit form']);
    }

    // Update a profile
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'username' => 'sometimes|unique:profiles,username,' . $id,
            'name' => 'sometimes',
            'last_name' => 'sometimes',
            'type' => 'sometimes',
            'image' => 'nullable|string',
            'status' => 'nullable',
        ]);

        $profile = Profile::findOrFail($id);
        foreach (['username', 'name', 'last_name', 'type', 'image', 'status'] as $field) {
            if (isset($validated[$field])) {
                $profile->$field = $validated[$field];
            }
        }
        $profile->save();

        return response()->json($profile);
    }

    // Destroy a profile (admin only)
    public function destroy(string $id)
    {
        $authUser = auth()->user();
        if (!$authUser || $authUser->profile->type !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $profile = Profile::findOrFail($id);
        $profile->delete();
        return response()->json(['message' => 'Profile deleted']);
    }
}
