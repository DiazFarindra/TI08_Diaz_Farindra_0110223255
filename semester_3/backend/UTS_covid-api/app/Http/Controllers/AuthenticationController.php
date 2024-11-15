<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function user(Request $request): mixed
    {
        return response_success(
            message: 'User fetched successfully',
            data: $request->user(),
            status: Response::HTTP_OK,
        );
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', Password::defaults()],
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken($user->name)->plainTextToken;

        return response_success(
            message: 'logged in',
            data: [
                'token' => $token,
            ],
            status: Response::HTTP_OK,
        );
    }

    public function register(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8', Password::defaults()],
        ]);

        $data['password'] = bcrypt($data['password']);

        $user = User::query()->create($data);

        $token = $user->createToken($request->name)->plainTextToken;

        return response_success(
            message: 'registered',
            data: array_merge($user->toArray(), ['token' => $token]),
            status: Response::HTTP_CREATED,
        );
    }

    public function logout(Request $request): JsonResponse
    {
        $user = $request->user();

        $user->tokens()->delete();

        return response_success(
            message: 'logged out',
            status: Response::HTTP_OK,
        );
    }
}
