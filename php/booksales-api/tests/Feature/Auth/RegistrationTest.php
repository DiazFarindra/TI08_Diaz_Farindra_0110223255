<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Fortify\Features;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->skipUnlessFortifyHas(Features::registration());
});

test('registration screen can be rendered', function () {
    $response = $this->get(route('register'));

    $response->assertOk();
});

test('new users can register', function () {
    $response = $this->withSession(['_token' => 'registration-token'])->post(route('register.store'), [
        '_token' => 'registration-token',
        'name' => 'Test User',
        'username' => 'test_user',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $this->assertDatabaseHas('users', [
        'name' => 'Test User',
        'username' => 'test_user',
        'email' => 'test@example.com',
    ]);
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('username is required when registering', function () {
    $response = $this->withSession(['_token' => 'registration-token'])->post(route('register.store'), [
        '_token' => 'registration-token',
        'name' => 'Another User',
        'email' => 'another@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertSessionHasErrors('username');
    $this->assertGuest();
});

test('username must be unique when registering', function () {
    $existingUser = User::factory()->create([
        'username' => 'taken_user',
    ]);

    $response = $this->withSession(['_token' => 'registration-token'])->post(route('register.store'), [
        '_token' => 'registration-token',
        'name' => 'Another User',
        'username' => $existingUser->username,
        'email' => 'another@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertSessionHasErrors('username');
    $this->assertGuest();
});
