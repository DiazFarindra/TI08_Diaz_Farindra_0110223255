<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;

Route::prefix('/patients')->middleware('auth:sanctum')->controller(PatientController::class)->group(function () {
    Route::get('/', 'index');
    Route::post('/', 'store');
    Route::get('/{patient}', 'show')->whereNumber('patient');
    Route::patch('/{patient}', 'update')->whereNumber('patient');
    Route::delete('/{patient}', 'destroy')->whereNumber('patient');

    Route::get('/search', 'search');
    Route::get('/status/{status}', 'status')->whereAlpha('status');
});

Route::prefix('/status')->middleware('auth:sanctum')->controller(StatusController::class)->group(function () {
    Route::get('/', 'index');
    Route::post('/', 'store');
    Route::patch('/{status}', 'update');
    Route::delete('/{status}', 'destroy');
});

Route::controller(AuthenticationController::class)->group(function () {
    Route::get('/user', 'user')->middleware('auth:sanctum');
    Route::post('/login', 'login');
    Route::post('/register', 'register');
    Route::post('/logout', 'logout')->middleware('auth:sanctum');
});
