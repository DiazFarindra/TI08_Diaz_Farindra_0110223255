<?php

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

if (! function_exists('response_success')) {
    function response_success(string $message, Model|JsonResponse|JsonResource|ResourceCollection|Collection|array $data = [], Response|int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(
            data: [
                'success' => true,
                'message' => $message,
                'code' => $status,
                'data' => (! empty($data) ? $data : []),
            ],
            status: $status
        );
    }
}

if (! function_exists('response_failed')) {
    function response_failed(string $message, Model|JsonResponse|JsonResource|ResourceCollection|Collection|array $data = [], Response|int $status = Response::HTTP_NOT_FOUND): JsonResponse
    {
        return response()->json(
            data: [
                'success' => false,
                'message' => $message,
                'code' => $status,
                'data' => (! empty($data) ? $data : []),
            ],
            status: $status
        );
    }
}
