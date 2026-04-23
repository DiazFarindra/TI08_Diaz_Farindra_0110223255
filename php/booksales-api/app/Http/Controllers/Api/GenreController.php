<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GenreResource;
use App\Models\Genre;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class GenreController extends Controller
{
    use ApiResponse;

    public function index(): JsonResponse
    {
        $genres = Genre::all();

        return $this->respondWithCollection(
            GenreResource::collection($genres),
            'Genres retrieved successfully'
        );
    }

    public function show(Genre $genre): JsonResponse
    {
        return $this->respondWithData(
            new GenreResource($genre),
            'Genre retrieved successfully'
        );
    }
}
