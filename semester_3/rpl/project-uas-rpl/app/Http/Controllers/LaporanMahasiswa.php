<?php

namespace App\Http\Controllers;

use App\Models\LaporanMahasiswa as ModelsLaporanMahasiswa;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class LaporanMahasiswa extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $laporan = ModelsLaporanMahasiswa::with('mahasiswa')->get();
        return view('laporan.index', compact('laporan'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $mahasiswa = Mahasiswa::all();

        return view('laporan.create', compact('mahasiswa'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswas,id',
            'nim' => 'required|integer',
            'tanggal' => 'required|date',
            'judul' => 'required|string',
            'status' => 'required|string',
        ]);

        ModelsLaporanMahasiswa::create($request->only([
            'mahasiswa_id',
            'nim',
            'tanggal',
            'judul',
            'status'
        ]));

        return redirect()->route('laporan.index')->with('Success', 'Data berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(LaporanMahasiswa $laporan)
    {
        return view('laporan.show', compact('laporan'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ModelsLaporanMahasiswa $laporan)
    {
        $mahasiswa = Mahasiswa::all();

        return view('laporan.edit', compact('laporan', 'mahasiswa'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ModelsLaporanMahasiswa $laporan)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswas,id',
            'nim' => 'required|integer',
            'tanggal' => 'required|date',
            'judul' => 'required|string',
            'status' => 'required|string',
        ]);

        $laporan->update($request->only([
            'mahasiswa_id',
            'nim',
            'tanggal',
            'judul',
            'status',
        ]));

        return redirect()->route('laporan.index')->with('Success', 'Data berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ModelsLaporanMahasiswa $laporan)
    {
        $laporan->delete();

        return redirect()->route('laporan.index')->with('success', 'Akun berhasil dihapus');
    }
}
