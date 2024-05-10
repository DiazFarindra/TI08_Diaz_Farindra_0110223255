<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Paramedic;
use App\Models\WorkUnit;
use Illuminate\Http\Request;

class ParamedicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paramedics = Paramedic::get();

        return view('admin.pages.paramedics.index', compact('paramedics'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $workUnits = WorkUnit::get();
        $categories = Category::get();

        return view('admin.pages.paramedics.create', compact('workUnits', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'work_unit_id' => ['required', 'integer', 'exists:work_units,id'],
            'name' => ['required', 'string'],
            'gender' => ['required', 'in:L,P'],
            'phone' => ['required', 'string'],
            'category' => ['required', 'string'],
            'birth_place' => ['required', 'string'],
            'birth_date' => ['required', 'date'],
            'address' => ['required', 'string', 'max:255'],
        ]);

        Paramedic::create($data);

        return redirect()->route('admin.paramedics.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paramedic $paramedic)
    {
        $workUnits = WorkUnit::get();
        $categories = Category::get();

        return view('admin.pages.paramedics.edit', compact('workUnits', 'categories', 'paramedic'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paramedic $paramedic)
    {
        $data = $request->validate([
            'work_unit_id' => ['required', 'integer', 'exists:work_units,id'],
            'name' => ['required', 'string'],
            'gender' => ['required', 'in:L,P'],
            'phone' => ['required', 'string'],
            'category' => ['required', 'string'],
            'birth_place' => ['required', 'string'],
            'birth_date' => ['required', 'date'],
            'address' => ['required', 'string', 'max:255'],
        ]);

        $paramedic->update($data);

        return redirect()->route('admin.paramedics.index')->with('success', 'data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paramedic $paramedic)
    {
        $paramedic->delete();

        return redirect()->route('admin.paramedics.index')->with('success', 'data berhasil dihapus!');
    }
}
