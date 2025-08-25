<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// List profiles (for AdminUserPage)
Route::get('/profiles', function() {
    return app(ProfileController::class)->index();
});
// Get profile details
Route::get('/profiles/{id}', function($id) {
    return app(ProfileController::class)->show($id);
});
// Edit profile
Route::put('/profiles/{id}', function(Request $request, $id) {
    return app(ProfileController::class)->update($request, $id);
});
// Delete profile
Route::delete('/profiles/{id}', function($id) {
    return app(ProfileController::class)->destroy($id);
});
// Edit user (update password, etc)
Route::put('/users/{id}', function(Request $request, $id) {
    return app(UserController::class)->update($request, $id);
});
// Crear usuario
Route::post('/users', function(Request $request) {
    return app(UserController::class)->store($request);
});
