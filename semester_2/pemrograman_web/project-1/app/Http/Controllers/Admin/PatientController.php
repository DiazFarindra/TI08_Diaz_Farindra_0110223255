<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Kelurahan;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $patients = Patient::get();

        return view('admin.pages.patients.index', compact('patients'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelurahan = Kelurahan::get();

        return view('admin.pages.patients.create', compact('kelurahan'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'kelurahan_id' => ['required', 'integer', 'exists:kelurahan,id'],
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'unique:patients,email'],
            'birth_place' => ['required', 'string'],
            'birth_date' => ['required', 'date'],
            'gender' => ['required', 'in:L,P'],
            'address' => ['required', 'string', 'max:255'],
        ]);

        Patient::create($data);

        return redirect()->route('admin.patients.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        $kelurahan = Kelurahan::get();

        return view('admin.pages.patients.edit', compact('kelurahan', 'patient'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Patient $patient)
    {
        $data = $request->validate([
            'kelurahan_id' => ['required', 'integer', 'exists:kelurahan,id'],
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'unique:patients,email,'.$patient->id],
            'birth_place' => ['required', 'string'],
            'birth_date' => ['required', 'date'],
            'gender' => ['required', 'in:L,P'],
            'address' => ['required', 'string', 'max:255'],
        ]);

        $patient->update($data);

        return redirect()->route('admin.patients.index')->with('success', 'data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();

        return redirect()->route('admin.patients.index')->with('success', 'data berhasil dihapus!');
    }
}
