<?php

use App\Http\Controllers\FruitController;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KelurahanController;
use App\Http\Controllers\ParamedikController;
use App\Http\Controllers\PasienController;
use App\Http\Controllers\PeriksaController;
use App\Http\Controllers\UnitKerjaController;
use App\Models\Kelurahan;
use App\Models\Unit_kerja;
use Illuminate\Support\Facades\Route;

Route::get('/', [HelloController::class, 'index']);
Route::get('/fruits', [FruitController::class, 'index'])->name('fruits.index');
Route::post('/fruits', [FruitController::class, 'create'])->name('fruits.create');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/salam', function () {
    return "Hai, Saya Syahrul Mubaroq";
});

Route::get('/profil', function () {
    return view('profil');
});

Route::get('/pasien', function () {
    return view('pasien');
});

Route::get('/admin', [AdminController::class, 'index']);

Route::get('/about', function () {
    return view('about');
});

Route::prefix('pasien')->name('pasien.')->controller(PasienController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    Route::get('/{pasien}', 'show')->name('show');
    Route::get('/{pasien}/edit', 'edit')->name('edit');
    Route::patch('/{pasien}', 'update')->name('update');
    Route::delete('/{pasien}', 'destroy')->name('destroy');
});
