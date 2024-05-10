<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Kelurahan;
use Illuminate\Http\Request;

class KelurahanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelurahan = Kelurahan::get();

        return view('admin.pages.kelurahan.index', compact('kelurahan'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kecamatan = Kecamatan::get();

        return view('admin.pages.kelurahan.create', compact('kecamatan'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'kecamatan_id' => ['required', 'integer', 'exists:kecamatan,id'],
            'name' => ['required', 'string', 'unique:kelurahan,name'],
        ]);

        Kelurahan::create($data);

        return redirect()->route('admin.kelurahan.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kelurahan $kelurahan)
    {
        $kecamatan = Kecamatan::get();

        return view('admin.pages.kelurahan.edit', compact('kecamatan', 'kelurahan'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kelurahan $kelurahan)
    {
        $data = $request->validate([
            'kecamatan_id' => ['required', 'integer', 'exists:kecamatan,id'],
            'name' => ['required', 'string', 'unique:kelurahan,name,'.$kelurahan->id],
        ]);

        $kelurahan->update($data);

        return redirect()->route('admin.kelurahan.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kelurahan $kelurahan)
    {
        $kelurahan->delete();

        return redirect()->route('admin.kelurahan.index')->with('success', 'data berhasil dihapus!');
    }
}
