<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FruitController;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\PasienController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/fruits', [FruitController::class, 'index'])->name('fruits.index');
Route::post('/fruits', [FruitController::class, 'create'])->name('fruits.create');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/salam', function () {
    return "Hai, Saya Syahrul Mubaroq";
})->middleware('auth');

Route::get('/profil', function () {
    return view('profil');
});

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin.index');

Route::get('/about', function () {
    return view('about');
});

Route::prefix('pasien')->middleware('auth')->name('pasien.')->controller(PasienController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    Route::get('/{pasien}', 'show')->name('show');
    Route::get('/{pasien}/edit', 'edit')->name('edit');
    Route::patch('/{pasien}', 'update')->name('update');
    Route::delete('/{pasien}', 'destroy')->name('destroy');
});

// Route::get('/pasien', [PasienController::class, 'index'])->name('pasien.index');
// Route::get('/pasien/create', [PasienController::class, 'create'])->name('pasien.create');
// Route::post('/pasien', [PasienController::class, 'store'])->name('pasien.store');
// Route::get('/pasien/{pasien}', [PasienController::class, 'show'])->name('pasien.show');
// Route::get('/pasien/{pasien}/edit', [PasienController::class, 'edit'])->name('pasien.edit');
// Route::patch('/pasien/{pasien}', [PasienController::class, 'update'])->name('pasien.update');
// Route::delete('/pasien/{pasien}', [PasienController::class, 'destroy'])->name('pasien.destroy');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
