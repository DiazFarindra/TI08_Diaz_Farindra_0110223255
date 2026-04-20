<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Inertia\Inertia;
use Inertia\Response;

class GenreController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('genres/index', [
            'genres' => Genre::all(),
        ]);
    }
}
