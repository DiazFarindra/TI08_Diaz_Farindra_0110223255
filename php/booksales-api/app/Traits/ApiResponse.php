<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;

trait ApiResponse
{
    /**
     * Single resource response.
     */
    protected function respondWithData(mixed $data, string $message = 'Success', int $status = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data instanceof JsonResource ? $data->resolve() : $data,
        ], $status);
    }

    /**
     * Multiple resources response (no pagination).
     */
    protected function respondWithCollection(mixed $data, string $message = 'Success', int $status = 200): JsonResponse
    {
        $resolved = $data instanceof JsonResource ? $data->resolve() : $data;

        return response()->json([
            'success' => true,
            'message' => $message,
            'count' => count($resolved),
            'data' => $resolved,
        ], $status);
    }

    /**
     * Paginated collection response.
     */
    protected function respondWithPagination(LengthAwarePaginator $paginator, mixed $data, string $message = 'Success', int $status = 200): JsonResponse
    {
        $resolved = $data instanceof JsonResource ? $data->resolve() : $data;

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $resolved,
            'meta' => [
                'current_page' => $paginator->currentPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
                'last_page' => $paginator->lastPage(),
                'from' => $paginator->firstItem(),
                'to' => $paginator->lastItem(),
            ],
            'links' => [
                'first' => $paginator->url(1),
                'last' => $paginator->url($paginator->lastPage()),
                'prev' => $paginator->previousPageUrl(),
                'next' => $paginator->nextPageUrl(),
            ],
        ], $status);
    }

    /**
     * Error response.
     */
    protected function respondWithError(string $message, int $status = 400, mixed $errors = null): JsonResponse
    {
        $payload = [
            'success' => false,
            'message' => $message,
        ];

        if ($errors !== null) {
            $payload['errors'] = $errors;
        }

        return response()->json($payload, $status);
    }
}
