<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\ProfileController;

// ---------------------
// Public routes
// ---------------------

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// Password reset routes (API-friendly)
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest');
Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest');

// ---------------------
// Protected routes (requires token)
// ---------------------
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [UserController::class, 'me']);
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/profiles/{id}', [ProfileController::class, 'show']);
});
