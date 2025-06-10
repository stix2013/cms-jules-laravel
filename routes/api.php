<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Placeholder for profile update - controller logic will be more detailed
Route::middleware('auth:sanctum')->put('/user/profile', function (Request $request) {
    // Logic to update user profile will be handled by a dedicated controller method later
    $user = $request->user();
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
    ]);
    $user->update($validatedData);
    return response()->json($user);
});
