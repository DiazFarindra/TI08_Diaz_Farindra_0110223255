<?php

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('admin can fetch all genres', function () {
    $admin = User::factory()->admin()->create();
    Genre::factory()->count(3)->create();

    $response = $this->actingAs($admin)->getJson('/api/genres');

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

test('customer can fetch a single genre with books relation', function () {
    $customer = User::factory()->create();
    $genre = Genre::factory()->create();
    $author = Author::factory()->create();
    Book::factory()->create([
        'genre_id' => $genre->id,
        'author_id' => $author->id,
        'title' => 'Genre Linked Book',
    ]);

    $response = $this->actingAs($customer)->getJson("/api/genres/{$genre->id}");

    $response->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.id', $genre->id)
        ->assertJsonPath('data.books.0.title', 'Genre Linked Book');
});

test('customer can create a genre', function () {
    $customer = User::factory()->create();

    $payload = [
        'name' => 'Fiction',
        'description' => 'Fictional stories',
    ];

    $response = $this->actingAs($customer)->postJson('/api/genres', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Genre created successfully')
        ->assertJsonPath('data.name', 'Fiction');

    $this->assertDatabaseHas('genres', ['name' => 'Fiction']);
});

test('store genre requires name', function () {
    $customer = User::factory()->create();

    $response = $this->actingAs($customer)->postJson('/api/genres', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store genre name must be unique', function () {
    $customer = User::factory()->create();

    Genre::factory()->create(['name' => 'Horror']);

    $response = $this->actingAs($customer)->postJson('/api/genres', ['name' => 'Horror']);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('guest cannot create update or show genres', function () {
    $genre = Genre::factory()->create();

    $this->postJson('/api/genres', ['name' => 'Drama'])->assertUnauthorized();
    $this->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])->assertUnauthorized();
    $this->getJson("/api/genres/{$genre->id}")->assertUnauthorized();
});

test('customer can create and update genres', function () {
    $customer = User::factory()->create();
    $genre = Genre::factory()->create();

    $this->actingAs($customer)->postJson('/api/genres', ['name' => 'Drama'])->assertCreated();
    $this->actingAs($customer)->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])->assertOk();
});

test('admin can delete genres', function () {
    $admin = User::factory()->admin()->create();
    $genre = Genre::factory()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/genres/{$genre->id}")
        ->assertOk();

    $this->assertDatabaseMissing('genres', ['id' => $genre->id]);
});

test('admin cannot create update or show genres', function () {
    $admin = User::factory()->admin()->create();
    $genre = Genre::factory()->create();

    $this->actingAs($admin)->postJson('/api/genres', ['name' => 'Admin Genre'])->assertForbidden();
    $this->actingAs($admin)->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])->assertForbidden();
    $this->actingAs($admin)->getJson("/api/genres/{$genre->id}")->assertForbidden();
});

test('customer cannot fetch all genres', function () {
    $customer = User::factory()->create();

    $this->actingAs($customer)->getJson('/api/genres')->assertForbidden();
});
