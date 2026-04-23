<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class AuthorController extends Controller
{
    use ApiResponse;

    public function index(): JsonResponse
    {
        $authors = Author::all();

        return $this->respondWithCollection(
            AuthorResource::collection($authors),
            'Authors retrieved successfully'
        );
    }

    public function store(StoreAuthorRequest $request): JsonResponse
    {
        $author = Author::create($request->validated());

        return $this->respondWithData(
            new AuthorResource($author),
            'Author created successfully',
            201
        );
    }

    public function show(Author $author): JsonResponse
    {
        return $this->respondWithData(
            new AuthorResource($author),
            'Author retrieved successfully'
        );
    }
}
