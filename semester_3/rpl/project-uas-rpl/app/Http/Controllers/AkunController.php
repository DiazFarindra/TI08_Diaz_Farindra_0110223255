<?php

namespace App\Http\Controllers;

use App\Models\Akun;
use App\Models\AkunModel;
use Illuminate\Http\Request;

class AkunController extends Controller
{
    public function index()
    {
        $akun = Akun::get();

        return view('akun.index', compact('akun'));
        // return view('akun.index', [
        //     'akun' => $akun
        // ]);
    }

    public function create()
    {
        return view('akun.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
            'nim' => ['required', 'integer'],
            'email' => ['required', 'string'],
            'telpone' => ['required', 'integer'],
            'peran' => ['required', 'string'],
            'status' => ['required', 'string'],
        ]);

        Akun::create($data);

        return redirect()->route('akun.index')->with('success', 'Akun berhasil ditambahkan!');
    }

    public function edit(Akun $akun)
    {
        return view('akun.edit', compact('akun'));
    }

    public function update(Request $request, Akun $akun)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'nim' => 'required|integer',
            'email' => 'required|email',
            'telpone' => 'required|numeric',
            'peran' => 'required|string',
            'status' => 'required|string',
        ]);

        $akun->update($data);

        return redirect()->route('akun.index')->with('success', 'Akun berhasil diupdate');
    }

    public function destroy(Akun $akun)
    {
        $akun->delete();

        return redirect()->route('akun.index')->with('success', 'Akun berhasil dihapus');
    }
}
