<?php

use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\GenreController;
use Illuminate\Support\Facades\Route;

Route::apiResource('books', BookController::class)->only(['index', 'show']);
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);

Route::middleware(['auth', 'admin'])->group(function (): void {
    Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('genres', GenreController::class)->only(['store', 'update', 'destroy']);
});
