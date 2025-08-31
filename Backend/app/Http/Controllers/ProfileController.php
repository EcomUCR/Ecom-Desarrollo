<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * List profiles with their users and vendor.
     */
    public function index()
    {
        $profiles = Profile::with(['users', 'vendor'])->paginate(10);
        return response()->json($profiles);
    }

    /**
     * Create a new profile.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'username'   => 'required|string|max:50|unique:profiles,username',
            'first_name' => 'required|string|max:50',
            'last_name'  => 'required|string|max:50',
            'email'      => 'required|email|unique:profiles,email',
            'password'   => 'required|string|min:6',
            'type'       => 'required|string|max:1',
            'avatar'     => 'nullable|string',
        ]);

        $profile = Profile::create([
            ...$validated,
            'password' => bcrypt($validated['password'])
        ]);

        return response()->json($profile, 201);
    }

    /**
     * Show a profile.
     */
    public function show(Profile $profile)
    {
        return response()->json($profile->load(['users', 'vendor']));
    }

    /**
     * Update a profile.
     */
    public function update(Request $request, Profile $profile)
    {
        $validated = $request->validate([
            'first_name' => 'string|max:50',
            'last_name'  => 'string|max:50',
            'email'      => 'email|unique:profiles,email,' . $profile->username . ',username',
            'password'   => 'nullable|string|min:6',
            'type'       => 'string|max:1',
            'avatar'     => 'nullable|string',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        $profile->update($validated);

        return response()->json($profile);
    }

    /**
     * Delete a profile.
     */
    public function destroy(Profile $profile)
    {
        $profile->delete();
        return response()->json(null, 204);
    }
}
