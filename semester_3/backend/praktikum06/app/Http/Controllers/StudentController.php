<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::get();

        return response()->json([
            'success' => true,
            'message' => 'List Data Student',
            'students' => $students,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request)
    {
        $data = $request->validated();

        $student = Student::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Data Student Created',
            'student' => $student,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return response()->json([
            'success' => true,
            'message' => 'Detail Data Student',
            'student' => $student,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student)
    {
        $data = $request->validated();

        $student->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Data Student Updated',
            'student' => $student,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data Student Deleted',
        ]);
    }
}
