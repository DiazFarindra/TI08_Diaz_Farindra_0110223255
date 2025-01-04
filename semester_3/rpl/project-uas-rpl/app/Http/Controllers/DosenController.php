<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use Illuminate\Http\Request;

class DosenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dosen = Dosen::get();

        return view('dosen.index', compact('dosen'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dosen.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
        ]);

        Dosen::create($data);

        return redirect()->route('dosen.index')->with('Success', 'Data berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dosen $dosen)
    {
        return view('dosen.edit', [
            'dosen' => $dosen
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dosen $dosen)
    {
        $data = $request->validate([
            'nama' => ['required', 'string'],
        ]);

        $dosen->update($data);

        return redirect()->route('dosen.index')->with('Success', 'Data berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dosen $dosen)
    {
        $dosen->delete();

        return redirect()->route('dosen.index')->with('success', 'Dosen berhasil dihapus');
    }
}
