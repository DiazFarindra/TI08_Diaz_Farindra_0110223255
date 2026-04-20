<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Inertia\Inertia;
use Inertia\Response;

class AuthorController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('authors/index', [
            'authors' => Author::all(),
        ]);
    }
}
