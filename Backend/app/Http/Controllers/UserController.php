<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Vendor;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class UserController extends Controller
{
    use AuthorizesRequests;

    // 🔹 Register User as Client or Vendor
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
        } else if ($request->type === 'vendor') {
            Vendor::create([
                'user_id' => $user->id,
                'name' => $request->name,
                'phone_number' => $request->phone_number ?? null,
            ]);
        }

        return response()->json(['message' => 'Registered successfully']);
    }

    // 🔹 Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->with('vendor')->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages(['email' => 'Invalid credentials']);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
            'vendor_id' => $user->vendor ? $user->vendor->id : null, // 👈 se envía vendorId
        ]);
    }

    // 🔹 Get logged-in user info
    public function me(Request $request)
    {
        $user = $request->user();
        return response()->json([
            'user' => $user,
            'client' => $user->client,
            'vendor' => $user->vendor,
            'staff' => $user->staff,
        ]);
    }

    // 🔹 Logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    // 🔹 List Users
    public function listUsers()
    {
        $this->authorize('viewAny', User::class);
        $users = User::with(['client', 'vendor', 'staff'])->get();
        return response()->json($users);
    }
}
