<?php

namespace App\Http\Controllers;

use App\Models\Fruit;
use Illuminate\Http\Request;

class FruitController extends Controller
{
    public function index()
    {
        $fruits = Fruit::get();
        return view('fruits.index', compact('fruits'));
    }

    public function create(Request $request)
    {
        $name = $request->input('name');
        $stock = $request->input('stock');

        Fruit::create([
            'name' => $name,
            'stock' => $stock
        ]);
        
        return redirect()->route('fruits.create');
    }
}
