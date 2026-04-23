<?php

use App\Models\Genre;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('can fetch all genres', function () {
    Genre::factory()->count(3)->create();

    $response = $this->getJson('/api/genres');

    $response->assertOk()
        ->assertJsonStructure([
            'success',
            'message',
            'count',
            'data' => [['id', 'name', 'description', 'created_at', 'updated_at']],
        ])
        ->assertJsonPath('success', true)
        ->assertJsonPath('count', 3);
});

test('can create a genre', function () {
    $payload = [
        'name' => 'Fiction',
        'description' => 'Fictional stories',
    ];

    $response = $this->postJson('/api/genres', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Genre created successfully')
        ->assertJsonPath('data.name', 'Fiction');

    $this->assertDatabaseHas('genres', ['name' => 'Fiction']);
});

test('store genre requires name', function () {
    $response = $this->postJson('/api/genres', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store genre name must be unique', function () {
    Genre::factory()->create(['name' => 'Horror']);

    $response = $this->postJson('/api/genres', ['name' => 'Horror']);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});
