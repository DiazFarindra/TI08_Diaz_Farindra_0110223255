<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('books/index', [
            'books' => Book::with(['author', 'genre'])->get(),
        ]);
    }
}
