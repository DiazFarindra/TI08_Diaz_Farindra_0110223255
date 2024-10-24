<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::patch('/animals/{animal}', [AnimalController::class, 'update']);
Route::delete('/animals/{animal}', [AnimalController::class, 'destroy']);
