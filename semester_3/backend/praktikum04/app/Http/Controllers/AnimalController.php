<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public array $animals = [
        'anjing',
        'kucing',
        'gajah',
        'jerapah',
        'kuda',
    ];

    public function index()
    {
        $animals = $this->animals;

        $response = array_map(function ($animal, $index) {
            return [
                'id' => $index,
                'name' => $animal,
            ];
        }, $animals, array_keys($animals));

        return response()->json($response);
    }

    public function store(Request $request)
    {
        $data = $request->name;

        array_push($this->animals, $data);

        return $this->index();
    }

    public function update(Request $request, int $id)
    {
        $this->animals[$id] = $request->name;

        return $this->index();
    }

    public function destroy(int $id)
    {
        unset($this->animals[$id]);

        return $this->index();
    }
}
