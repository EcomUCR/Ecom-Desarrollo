<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// ---------------------
// Public routes
// ---------------------

// Register a user (client or vendor)
Route::post('/register', [UserController::class, 'register']);

// Login
//Route::post('/login', [UserController::class, 'login']);

// ---------------------
// Protected routes
// ---------------------
Route::middleware('auth:sanctum')->group(function () {

    // Get logged-in user info
    Route::get('/me', [UserController::class, 'me']);

    // You could add more protected routes here, e.g. logout, update profile, etc.
});
// 