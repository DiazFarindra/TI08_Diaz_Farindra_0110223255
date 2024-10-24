<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        $animals = Animal::query()->get();

        return response()->json($animals);
    }

    public function store(Request $request)
    {
        $data = $request->name;

        Animal::create([
            'name' => $data,
        ]);

        return response()->json(Animal::query()->get());
    }

    public function update(Request $request, Animal $animal)
    {
        $animal->update([
            'name' => $request->name,
        ]);

        return response()->json(Animal::query()->get());
    }

    public function destroy(Animal $animal)
    {
        $animal->delete();

        return response()->json(Animal::query()->get());
    }
}
