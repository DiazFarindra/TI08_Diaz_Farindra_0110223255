<?php

use App\Models\Author;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('can fetch all authors', function () {
    Author::factory()->count(3)->create();

    $response = $this->getJson('/api/authors');

    $response->assertOk()
        ->assertJsonStructure([
            'success',
            'message',
            'count',
            'data' => [['id', 'name', 'photo', 'bio', 'created_at', 'updated_at']],
        ])
        ->assertJsonPath('success', true)
        ->assertJsonPath('count', 3);
});

test('can create an author', function () {
    $payload = [
        'name' => 'J.K. Rowling',
        'bio' => 'British author of Harry Potter.',
    ];

    $response = $this->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Author created successfully')
        ->assertJsonPath('data.name', 'J.K. Rowling');

    $this->assertDatabaseHas('authors', ['name' => 'J.K. Rowling']);
});

test('store author requires name', function () {
    $response = $this->postJson('/api/authors', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store author with all fields', function () {
    $payload = [
        'name' => 'George Orwell',
        'photo' => 'https://example.com/orwell.jpg',
        'bio' => 'English novelist and essayist.',
    ];

    $response = $this->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('data.name', 'George Orwell')
        ->assertJsonPath('data.photo', 'https://example.com/orwell.jpg');
});
