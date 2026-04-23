<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    use ApiResponse;

    public function index(Request $request): JsonResponse
    {
        $perPage = (int) $request->query('per_page', 15);

        $books = Book::with(['author', 'genre'])->paginate($perPage);

        return $this->respondWithPagination(
            $books,
            BookResource::collection($books),
            'Books retrieved successfully'
        );
    }

    public function show(Book $book): JsonResponse
    {
        $book->load(['author', 'genre']);

        return $this->respondWithData(
            new BookResource($book),
            'Book retrieved successfully'
        );
    }
}
