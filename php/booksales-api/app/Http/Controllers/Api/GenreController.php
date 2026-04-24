<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreGenreRequest;
use App\Http\Requests\Api\UpdateGenreRequest;
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

    public function store(StoreGenreRequest $request): JsonResponse
    {
        $genre = Genre::create($request->validated());

        return $this->respondWithData(
            new GenreResource($genre),
            'Genre created successfully',
            201
        );
    }

    public function show(Genre $genre): JsonResponse
    {
        return $this->respondWithData(
            new GenreResource($genre),
            'Genre retrieved successfully'
        );
    }

    public function update(UpdateGenreRequest $request, Genre $genre): JsonResponse
    {
        $genre->update($request->validated());

        return $this->respondWithData(
            new GenreResource($genre),
            'Genre updated successfully'
        );
    }

    public function destroy(Genre $genre): JsonResponse
    {
        $genre->delete();

        return $this->respondWithData(null, 'Genre deleted successfully');
    }
}
