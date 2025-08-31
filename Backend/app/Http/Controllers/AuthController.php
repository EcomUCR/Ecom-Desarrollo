<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Models\Profile;
use App\Models\Vendor;

class AuthController extends Controller
{
    /**
     * ✅ Register (Normal user or Vendor)
     */
    public function register(Request $request)
    {
        $request->validate([
            'email'       => 'required|email|unique:users,email',
            'password'    => 'required|min:6',
            'username'    => 'required|unique:profiles,username',
            'first_name'  => 'required',
            'last_name'   => 'required',
            'type'        => 'required|in:U,V', // U = User, V = Vendor
        ]);

        // 1. Create User
        $user = User::create([
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // 2. Create Profile
        $profile = Profile::create([
            'username'   => $request->username,
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password), // ⚠ duplicated but in your schema
            'type'       => $request->type,
        ]);

        // 3. Link user <-> profile
        $user->profiles()->attach($profile->username);

        // 4. If Vendor, create Vendor record
        if ($request->type === 'V') {
            Vendor::create([
                'name'        => $request->vendor_name ?? 'My Business',
                'description' => $request->vendor_description ?? null,
                'profile_id'  => $profile->username,
            ]);
        }

        return response()->json(['message' => 'Registered successfully'], 201);
    }

    /**
     * ✅ Login & issue Sanctum token
     */
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Optional: delete old tokens
        $user->tokens()->delete();

        // Create new token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'      => 'Login successful',
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }

    /**
     * ✅ Get Authenticated User + Profile + Vendor (if exists)
     */
    public function me(Request $request)
    {
        $user = $request->user();
        $profile = $user->profiles()->first();
        $vendor = $profile?->vendor;

        return response()->json([
            'user'    => $user,
            'profile' => $profile,
            'vendor'  => $vendor,
        ]);
    }

    /**
     * ✅ Logout (revoke tokens)
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
