<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
 public function index()
 {

    $username = 'Syahrul Mubaroq';
    $role = 'Mahasiswa';
    

    return view('home',[
        'username' => $username,
        'role' => $role,

    ]);
 }
}
