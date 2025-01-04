<?php

use App\Http\Controllers\AkunController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\InformasiController;
use App\Http\Controllers\LaporanMahasiswa;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\PenjadwalanController;
use App\Http\Controllers\ProfilController;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/profil', function () {
    return view('/profil/profil');
    Route::get('/profil', [ProfilController::class, 'index']);
    Route::post('/profil', [ProfilController::class, 'store']);
    Route::patch('/profil/{profil}', [ProfilController::class, 'update']);
    Route::delete('/profil/{profil}', [ProfilController::class, 'destroy']);

});

Route::get('/dosen', [DosenController::class, 'index'])->name('dosen.index');
Route::get('/dosen/create', [DosenController::class, 'create'])->name('dosen.create');
Route::post('/dosen', [DosenController::class, 'store'])->name('dosen.store');
Route::get('/dosen/{dosen}/edit', [DosenController::class, 'edit'])->name('dosen.edit');
Route::patch('/dosen/{dosen}', [DosenController::class, 'update'])->name('dosen.update');
Route::delete('/dosen/{dosen}', [DosenController::class, 'destroy'])->name('dosen.destroy');

Route::get('/mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa.index');
Route::get('/mahasiswa/create', [MahasiswaController::class, 'create'])->name('mahasiswa.create');
Route::post('/mahasiswa', [MahasiswaController::class, 'store'])->name('mahasiswa.store');
Route::get('/mahasiswa/{mahasiswa}/edit', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
Route::patch('/mahasiswa/{mahasiswa}', [MahasiswaController::class, 'update'])->name('mahasiswa.update');
Route::delete('/mahasiswa/{mahasiswa}', [MahasiswaController::class, 'destroy'])->name('mahasiswa.destroy');

Route::get('/informasi', [InformasiController::class, 'index'])->name('informasi.index');
Route::get('/informasi/create', [InformasiController::class, 'create'])->name('informasi.create');
Route::post('/informasi', [InformasiController::class, 'store'])->name('informasi.store');
Route::get('/informasi/{informasi}/edit', [InformasiController::class, 'edit'])->name('informasi.edit');
Route::patch('/informasi/{informasi}', [InformasiController::class, 'update'])->name('informasi.update');
Route::delete('/informasi/{informasi}', [InformasiController::class, 'destroy'])->name('informasi.destroy');

Route::get('/akun', [AkunController::class, 'index'])->name('akun.index');
Route::get('/akun/create', [AkunController::class, 'create'])->name('akun.create');
Route::post('/akun', [AkunController::class, 'store'])->name('akun.store');
Route::get('akun/{akun}/edit', [AkunController::class, 'edit'])->name('akun.edit');
Route::patch('/akun/{akun}', [AkunController::class, 'update'])->name('akun.update');
Route::delete('/akun/{akun}', [AkunController::class, 'destroy'])->name('akun.destroy');

Route::get('/penjadwalan', [PenjadwalanController::class, 'index'])->name('penjadwalan.index');
Route::get('/penjadwalan/create', [PenjadwalanController::class, 'create'])->name('penjadwalan.create');
Route::post('/penjadwalan', [PenjadwalanController::class, 'store'])->name('penjadwalan.store');
Route::get('/penjadwalan/{penjadwalan}/edit', [PenjadwalanController::class, 'edit'])->name('penjadwalan.edit');
Route::patch('/penjadwalan/{penjadwalan}', [PenjadwalanController::class, 'update'])->name('penjadwalan.update');
Route::delete('/penjadwalan/{penjadwalan}', [PenjadwalanController::class, 'destroy'])->name('penjadwalan.destroy');

Route::get('/laporan', [LaporanMahasiswa::class, 'index'])->name('laporan.index');
Route::get('/laporan/create', [LaporanMahasiswa::class, 'create'])->name('laporan.create');
Route::post('/laporan', [LaporanMahasiswa::class, 'store'])->name('laporan.store');
Route::get('/laporan/{laporan}', [LaporanMahasiswa::class, 'show'])->name('laporan.show');
Route::get('/laporan/{laporan}/edit', [LaporanMahasiswa::class, 'edit'])->name('laporan.edit');
Route::patch('/laporan/{laporan}', [LaporanMahasiswa::class, 'update'])->name('laporan.update');
Route::delete('/laporan/{laporan}', [LaporanMahasiswa::class, 'destroy'])->name('laporan.destroy');
