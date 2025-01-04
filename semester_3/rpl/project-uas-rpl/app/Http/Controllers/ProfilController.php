<?php

namespace App\Http\Controllers;

use App\Models\cr;
use App\Models\Profil;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profil = Profil::get();

        return view('profil.index', [
            'profil' => $profil
        ]);
    }

    public function create()
    {
        return view('profil.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
            'telpone' => ['required', 'integer'],
            'email' => ['required', 'string'],
            'alamat' => ['required', 'string'],
        ]);

        Profil::create($data);
    }

    public function edit(Profil $akun)
    {
        return view('akun.edit', [
            'akun' => $akun
        ]);
    }

    public function update(Request $request, Profil $profil)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
            'telpone' => ['required', 'integer'],
            'email' => ['required', 'string'],
            'alamat' => ['required', 'text'],
        ]);

        $profil->update($data);
    }

    public function destroy(Profil $profil)
    {
        $profil->delete();
    }
}
