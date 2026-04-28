<?php

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('admin can fetch all authors', function () {
    $admin = User::factory()->admin()->create();
    Author::factory()->count(3)->create();

    $response = $this->actingAs($admin)->getJson('/api/authors');

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

test('customer can fetch a single author with books relation', function () {
    $customer = User::factory()->create();
    $author = Author::factory()->create();
    $genre = Genre::factory()->create();
    Book::factory()->create([
        'author_id' => $author->id,
        'genre_id' => $genre->id,
        'title' => 'Relational Book',
    ]);

    $response = $this->actingAs($customer)->getJson("/api/authors/{$author->id}");

    $response->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.id', $author->id)
        ->assertJsonPath('data.books.0.title', 'Relational Book');
});

test('customer can create an author', function () {
    $customer = User::factory()->create();

    $payload = [
        'name' => 'J.K. Rowling',
        'bio' => 'British author of Harry Potter.',
    ];

    $response = $this->actingAs($customer)->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Author created successfully')
        ->assertJsonPath('data.name', 'J.K. Rowling');

    $this->assertDatabaseHas('authors', ['name' => 'J.K. Rowling']);
});

test('store author requires name', function () {
    $customer = User::factory()->create();

    $response = $this->actingAs($customer)->postJson('/api/authors', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store author with all fields', function () {
    $customer = User::factory()->create();

    $payload = [
        'name' => 'George Orwell',
        'photo' => 'https://example.com/orwell.jpg',
        'bio' => 'English novelist and essayist.',
    ];

    $response = $this->actingAs($customer)->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('data.name', 'George Orwell')
        ->assertJsonPath('data.photo', 'https://example.com/orwell.jpg');
});

test('guest cannot create update or show authors', function () {
    $author = Author::factory()->create();

    $this->postJson('/api/authors', ['name' => 'Agatha Christie'])->assertUnauthorized();
    $this->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])->assertUnauthorized();
    $this->getJson("/api/authors/{$author->id}")->assertUnauthorized();
});

test('customer can create and update authors', function () {
    $customer = User::factory()->create();
    $author = Author::factory()->create();

    $this->actingAs($customer)->postJson('/api/authors', ['name' => 'Agatha Christie'])->assertCreated();
    $this->actingAs($customer)->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])->assertOk();
});

test('admin can delete authors', function () {
    $admin = User::factory()->admin()->create();
    $author = Author::factory()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/authors/{$author->id}")
        ->assertOk();

    $this->assertDatabaseMissing('authors', ['id' => $author->id]);
});

test('admin cannot create update or show authors', function () {
    $admin = User::factory()->admin()->create();
    $author = Author::factory()->create();

    $this->actingAs($admin)->postJson('/api/authors', ['name' => 'Admin Author'])->assertForbidden();
    $this->actingAs($admin)->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])->assertForbidden();
    $this->actingAs($admin)->getJson("/api/authors/{$author->id}")->assertForbidden();
});

test('customer cannot fetch all authors', function () {
    $customer = User::factory()->create();

    $this->actingAs($customer)->getJson('/api/authors')->assertForbidden();
});
