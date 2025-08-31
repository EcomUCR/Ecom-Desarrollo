<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of users with profiles.
     */
    public function index()
    {
        $users = User::with('profiles')->paginate(10);
        return response()->json($users);
    }

    /**
     * Store a new user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'profiles' => 'array',
            'profiles.*' => 'exists:profiles,username'
        ]);

        $user = User::create([
            'email'    => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        if (!empty($validated['profiles'])) {
            $user->profiles()->attach($validated['profiles']);
        }

        return response()->json($user->load('profiles'), 201);
    }

    /**
     * Display a specific user.
     */
    public function show(User $user)
    {
        return response()->json($user->load('profiles'));
    }

    /**
     * Update a user.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'password' => 'string|min:6',
            'profiles' => 'array',
            'profiles.*' => 'exists:profiles,username'
        ]);

        if (isset($validated['password'])) {
            $user->update(['password' => bcrypt($validated['password'])]);
        }

        if (isset($validated['profiles'])) {
            $user->profiles()->sync($validated['profiles']);
        }

        return response()->json($user->load('profiles'));
    }

    /**
     * Delete a user.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
        