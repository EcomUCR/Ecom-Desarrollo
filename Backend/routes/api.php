<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;



Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);

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

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.store');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.update');

   // Route::post('/login', [AuthenticatedSessionController::class, 'store']);
/*Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest')
    ->name('login');
*/
Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth:sanctum', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth:sanctum', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->name('logout');



/*Route::post('/test-forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email') // Esto es exactamente lo que hace Breeze
    );

    return $status === Password::RESET_LINK_SENT
        ? response()->json(['status' => ($status)], 200)
        : response()->json(['email' => ($status)], 400);
});

*/