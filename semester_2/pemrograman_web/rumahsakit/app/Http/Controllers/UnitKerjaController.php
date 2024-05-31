<?php

namespace App\Http\Controllers;

use App\Models\Unit_kerja;
use Illuminate\Http\Request;

class UnitKerjaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Unit_kerja $unit_kerja)
    {

        $list_unit_kerja = Unit_kerja::all();
        return view('unit_kerja.show', ['list_unit_kerja' => $list_unit_kerja]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Unit_kerja $unit_kerja)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Unit_kerja $unit_kerja)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit_kerja $unit_kerja)
    {
        //
    }
}
