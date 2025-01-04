<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Informasi;
use App\Models\Mahasiswa;
use App\Models\Penjadwalan;
use Illuminate\Http\Request;

class PenjadwalanController extends Controller
{
    public function index()
    {
        $penjadwalan = Penjadwalan::with(['mahasiswa', 'dosen'])->get();

        return view('penjadwalan.index', compact('penjadwalan'));
    }

    public function create()
    {
        // Mengambil data mahasiswa dan dosen
        $informasi = Informasi::all();
        $dosen = Dosen::all();
        $mahasiswa = Mahasiswa::all();

        return view('penjadwalan.create', compact('dosen', 'mahasiswa', 'informasi'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswas,id',
            'dosen_id' => 'required|exists:dosens,id',
            'tanggal' => 'required|date',
            'jam' => 'required|string',
            'topik' => 'required|string',
            'status' => 'required|string',
        ]);

        Penjadwalan::create($request->only(['mahasiswa_id', 'dosen_id', 'tanggal', 'jam', 'topik', 'status']));

        return redirect()->route('penjadwalan.index')->with('success', 'Data berhasil ditambahkan');
    }


    public function edit(Penjadwalan $penjadwalan)
    {
        $dosen = Dosen::all();
        $mahasiswa = Mahasiswa::all();  

        return view('penjadwalan.edit', compact('penjadwalan','mahasiswa', 'dosen'));
    }

    public function update(Request $request, Penjadwalan $penjadwalan)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswas,id',
            'dosen_id' => 'required|exists:dosens,id',
            'tanggal' => 'required|date',
            'jam' => 'required|string',
            'topik' => 'required|string',
            'status' => 'required|string',
        ]);

        $penjadwalan->update($request->only(['mahasiswa_id', 'dosen_id', 'tanggal', 'jam', 'topik', 'status']));

        return redirect()->route('penjadwalan.index')->with('success', 'Data berhasil diupdate');
    }


    public function destroy(Penjadwalan $penjadwalan)
    {
        $penjadwalan->delete();

        return redirect()->route('penjadwalan.index')->with('success', 'Akun berhasil dihapus');
    }
}
