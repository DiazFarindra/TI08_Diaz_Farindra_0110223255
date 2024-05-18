<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index()
    {
        $username = 'diaz farindra';
        $role = 'mahasiswa';

        return view('home', [
            'username' => $username,
            'role' => $role,
        ]);
    }
}
