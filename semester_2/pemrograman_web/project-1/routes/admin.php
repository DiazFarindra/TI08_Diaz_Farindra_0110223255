<?php

use App\Http\Controllers\Admin\CheckupController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\KecamatanController;
use App\Http\Controllers\Admin\KelurahanController;
use App\Http\Controllers\Admin\ParamedicController;
use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\Admin\WorkUnitController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', DashboardController::class)->name('dashboard');

Route::resource('patients', PatientController::class)->except('show');
Route::resource('paramedics', ParamedicController::class)->except('show');
Route::resource('checkups', CheckupController::class)->except('show');

Route::resource('kecamatan', KecamatanController::class)->except('show');
Route::resource('kelurahan', KelurahanController::class)->except('show');
Route::resource('work-units', WorkUnitController::class)->except('show');
