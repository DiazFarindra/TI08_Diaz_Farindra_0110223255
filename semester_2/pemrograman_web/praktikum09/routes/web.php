<?php

use App\Http\Controllers\FruitController;
use App\Http\Controllers\HelloController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HelloController::class, 'index']);
Route::get('/fruits', [FruitController::class, 'index'])->name('fruits.index');
Route::post('/fruits', [FruitController::class, 'create'])->name('fruits.create');

Route::get('/about', function () {
    return view('about');
});
