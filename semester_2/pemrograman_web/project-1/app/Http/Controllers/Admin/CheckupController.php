<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Checkup;
use App\Models\Paramedic;
use App\Models\Patient;
use Illuminate\Http\Request;

class CheckupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $checkups = Checkup::get();

        return view('admin.pages.checkups.index', compact('checkups'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $patients = Patient::get();
        $paramedics = Paramedic::get();

        return view('admin.pages.checkups.create', compact('patients', 'paramedics'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => ['required', 'integer', 'exists:patients,id'],
            'paramedic_id' => ['required', 'integer', 'exists:paramedics,id'],
            'date' => ['required', 'date'],
            'weight' => ['required', 'integer'],
            'height' => ['required', 'integer'],
            'tension' => ['required', 'string'],
            'about' => ['required', 'string', 'max:255'],
        ]);

        Checkup::create($data);

        return redirect()->route('admin.checkups.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Checkup $checkup)
    {
        $patients = Patient::get();
        $paramedics = Paramedic::get();

        return view('admin.pages.checkups.edit', compact('patients', 'paramedics', 'checkup'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Checkup $checkup)
    {
        $data = $request->validate([
            'patient_id' => ['required', 'integer', 'exists:patients,id'],
            'paramedic_id' => ['required', 'integer', 'exists:paramedics,id'],
            'date' => ['required', 'date'],
            'weight' => ['required', 'integer'],
            'height' => ['required', 'integer'],
            'tension' => ['required', 'string'],
            'about' => ['required', 'string', 'max:255'],
        ]);

        $checkup->update($data);

        return redirect()->route('admin.checkups.index')->with('success', 'data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Checkup $checkup)
    {
        $checkup->delete();

        return redirect()->route('admin.checkups.index')->with('success', 'data berhasil dihapus!');
    }
}
