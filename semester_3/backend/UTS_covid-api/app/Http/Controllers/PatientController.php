<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\Http\Requests\PatientUpdateRequest;
use App\Models\Patient;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $patients = Patient::query()->latest()->get();

        return response_success(
            message: $patients->isEmpty()
                ? 'No patients found'
                : 'Patients fetched successfully',
            data: $patients,
            status: Response::HTTP_OK,
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientRequest $request): JsonResponse
    {
        $data = $request->validated();

        $patient = Patient::query()->create($data);

        return response_success(
            message: 'Patient created successfully',
            data: $patient,
            status: Response::HTTP_CREATED,
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(int $patient)
    {
        $data = $this->getPatient($patient);

        return response_success(
            message: 'Patient fetched successfully',
            data: $data,
            status: Response::HTTP_OK,
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PatientUpdateRequest $request, int $student): JsonResponse
    {
        $data = $request->validated();

        $patient = $this->getPatient($student);

        $patient->update($data);

        return response_success(
            message: 'Patient updated successfully',
            data: $patient,
            status: Response::HTTP_OK,
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $student): JsonResponse
    {
        $patient = $this->getPatient($student);

        $patient->delete();

        return response_success(
            message: 'Patient deleted successfully',
            status: Response::HTTP_OK,
        );
    }

    public function search(Request $request): JsonResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $patients = Patient::query()
            ->where('name', 'like', "%{$request->name}%")
            ->get();

        return response_success(
            message: $patients->isEmpty()
                ? 'No patients found'
                : 'Patients fetched successfully',
            data: $patients,
            status: Response::HTTP_OK,
        );
    }

    public function status(string $status): JsonResponse
    {
        $status = str($status)->lower();

        $patients = Patient::query()
            ->whereHas(relation: 'status', callback: function ($query) use (&$status): void {
                $query->where('name', $status);
            })
            ->get();

        return response_success(
            message: $patients->isEmpty()
                ? 'No patients found'
                : 'Patients fetched successfully',
            data: $patients,
            status: Response::HTTP_OK,
        );
    }

    private function getPatient(int $id): mixed
    {
        return Patient::query()->findOr($id, function () {
            throw new HttpResponseException(
                response: response_failed(
                    message: 'Patient not found',
                    status: Response::HTTP_NOT_FOUND,
                )
            );
        });
    }
}
