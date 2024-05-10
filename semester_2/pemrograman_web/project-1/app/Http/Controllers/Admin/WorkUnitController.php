<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WorkUnit;
use Illuminate\Http\Request;

class WorkUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $workUnits = WorkUnit::get();

        return view('admin.pages.work-units.index', compact('workUnits'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.pages.work-units.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
        ]);

        WorkUnit::create($data);

        return redirect()->route('admin.work-units.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WorkUnit $workUnit)
    {
        return view('admin.pages.work-units.edit', compact('workUnit'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, WorkUnit $workUnit)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
        ]);

        $workUnit->update($data);

        return redirect()->route('admin.work-units.index')->with('success', 'data berhasil dibuat!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WorkUnit $workUnit)
    {
        $workUnit->delete();

        return redirect()->route('admin.work-units.index')->with('success', 'data berhasil dihapus!');
    }
}
