<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::with('profile');

        // Filter by name or username
        if ($request->has('name')) {
            $name = $request->input('name');
            $query->whereHas('profile', function($q) use ($name) {
                $q->where('name', 'like', "%$name%")
                  ->orWhere('username', 'like', "%$name%");
            });
        }

        // Filter by recent activity (last_login_at in last 7 days)
        if ($request->has('recent')) {
            $query->where('last_login_at', '>=', now()->subDays(7));
        }

        $users = $query->get();
        return response()->json($users);
    }

    public function create()
    {
        return response()->json(['message' => 'Display user creation form']);
    }

    public function store(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'username' => 'required|unique:profiles,username',
            'name' => 'required',
            'last_name' => 'required',
            'type' => 'required',
            'image' => 'nullable|string',
            'status' => 'sometimes|boolean',
        ]);

        // Create user
        $user = User::create([
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Create profile
        $profile = Profile::create([
            'user_id' => $user->id,
            'username' => $validated['username'],
            'name' => $validated['name'],
            'last_name' => $validated['last_name'],
            'type' => $validated['type'],
            'image' => $validated['image'] ?? null,
            'status' => $validated['status'] ?? true, // ✅ valor por defecto
        ]);

        return response()->json(['user' => $user, 'profile' => $profile], 201);
    }

    public function show(string $id)
    {
        $user = User::with('profile')->findOrFail($id);
        $user->last_login_at = now();
        $user->save();
        return response()->json($user);
    }

    public function edit(string $id)
    {
        return response()->json(['message' => 'Display user edit form']);
    }

    public function update(Request $request, string $id)
    {
        // Validate input
        $validated = $request->validate([
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes|min:6',
            'username' => 'sometimes|unique:profiles,username',
            'name' => 'sometimes',
            'last_name' => 'sometimes',
            'type' => 'sometimes',
            'image' => 'nullable|string',
            'status' => 'sometimes|boolean', // ✅ validar booleano
        ]);

        $user = User::findOrFail($id);
        $profile = $user->profile;

        // Update user
        if (isset($validated['email'])) {
            $user->email = $validated['email'];
        }
        if (isset($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }
        $user->save();

        // Update profile
        if ($profile) {
            foreach (['username', 'name', 'last_name', 'type', 'image'] as $field) {
                if (isset($validated[$field])) {
                    $profile->$field = $validated[$field];
                }
            }

            if (isset($validated['status'])) {
                $profile->status = $validated['status'];
            }

            $profile->save();
        }

        return response()->json(['user' => $user, 'profile' => $profile]);
    }

    public function destroy(string $id)
    {
        $authUser = auth()->user();
        if (!$authUser || $authUser->profile->type !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $user = User::findOrFail($id);
        $profile = $user->profile;

        if ($profile) {
            $profile->delete();
        }
        $user->delete();

        return response()->json(['message' => 'User deleted']);
    }
}
