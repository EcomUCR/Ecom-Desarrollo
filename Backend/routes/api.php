<?php 
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;

// Simple admin check closure
function isAdmin() {
	$user = auth()->user();
	return $user && $user->profile && $user->profile->type === 'admin';
}

// List users with optional filters
Route::get('/users', function(Request $request) {
	return app(UserController::class)->index($request);
});
// Get user details
Route::get('/users/{id}', function($id) {
	return app(UserController::class)->show($id);
});
// Edit user
Route::put('/users/{id}', function(Request $request, $id) {
	return app(UserController::class)->update($request, $id);
});
// Delete user
Route::delete('/users/{id}', function($id) {
	return app(UserController::class)->destroy($id);
});
