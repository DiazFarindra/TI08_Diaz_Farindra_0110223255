<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Informasi;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class InformasiController extends Controller
{
    public function index()
    {
        // Ambil data informasi dengan relasi ke dosen dan mahasiswa
        $informasi = Informasi::with('mahasiswa', 'dosen')->get();

        return view('informasi.index', compact('informasi'));
    }

    public function create()
    {
        // Ambil data mahasiswa dan dosen
        $mahasiswa = Mahasiswa::all();
        $dosen = Dosen::all();

        return view('informasi.create', compact('mahasiswa', 'dosen'));
    }

    public function store(Request $request)
    {
        // Validasi data
        $validatedData = $request->validate([
            'mahasiswa_id' => 'nullable|exists:mahasiswas,id',
            'dosen_id' => 'nullable|exists:dosens,id',
            'pesan' => 'required|string',
            'status' => 'required|string',
        ]);

        // Simpan data ke database
        Informasi::create($validatedData);

        return redirect()->route('informasi.index')->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(Informasi $informasi)
    {
        return view('informasi.edit', [
            'informasi' => $informasi
        ]);
    }

    public function update(Request $request, Informasi $informasi)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
            'pesan' => ['required', 'string'],
            'status' => ['required', 'string'],
            'dosen_id' => ['required', 'boolean'],
        ]);

        $informasi->update($data);

        return redirect()->route('informasi.index')->with('Success', 'Data berhasil diperbarui');
    }

    public function destroy(Informasi $informasi)
    {
        $informasi->delete();

        return redirect()->route('informasi.index')->with('Success', 'Data berhasil dihapus');
    }
}
