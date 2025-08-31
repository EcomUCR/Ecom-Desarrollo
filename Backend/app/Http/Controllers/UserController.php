<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Vendor;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    // Register User as Client or Vendor
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'type' => 'required|in:client,vendor',
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($request->type === 'client') {
            Client::create([
                'user_id' => $user->id,
                'username' => $request->username,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'address' => $request->address ?? null,
            ]);
        } else {
            Vendor::create([
                'user_id' => $user->id,
                'name' => $request->name,
                'description' => $request->description ?? null,
                'address' => $request->address ?? null,
                'phone_number' => $request->phone_number ?? null,
            ]);
        }

        return response()->json(['message' => 'Registered successfully']);
    }

    // Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages(['email' => 'Invalid credentials']);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }

    // Get logged-in user info
    public function me(Request $request)
    {
        $user = $request->user();
        $client = $user->client;
        $vendor = $user->vendor;

        return response()->json([
            'user' => $user,
            'client' => $client,
            'vendor' => $vendor,
        ]);
    }
}