<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatusRequest;
use App\Models\Status;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $statuses = Status::query()->get();

        return response_success(
            message: $statuses->isEmpty()
                ? 'No statuses found'
                : 'Statuses fetched successfully',
            data: $statuses,
            status: Response::HTTP_OK,
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StatusRequest $request): JsonResponse
    {
        $data = $request->validated();

        $status = Status::query()->create($data);

        return response_success(
            message: 'Status created successfully',
            data: $status,
            status: Response::HTTP_CREATED,
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StatusRequest $request, Status $status): JsonResponse
    {
        $data = $request->validated();

        $status->update($data);

        return response_success(
            message: 'Status updated successfully',
            data: $status,
            status: Response::HTTP_OK,
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $status): JsonResponse
    {
        $status->delete();

        return response_success(
            message: 'Status deleted successfully',
            status: Response::HTTP_OK,
        );
    }
}
