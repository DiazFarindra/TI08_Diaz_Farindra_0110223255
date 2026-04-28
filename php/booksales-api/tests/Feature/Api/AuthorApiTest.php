<?php

use App\Models\Author;
use App\Models\User;
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

test('can fetch a single author without authentication', function () {
    $author = Author::factory()->create();

    $response = $this->getJson("/api/authors/{$author->id}");

    $response->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.id', $author->id);
});

test('can create an author', function () {
    $admin = User::factory()->admin()->create();

    $payload = [
        'name' => 'J.K. Rowling',
        'bio' => 'British author of Harry Potter.',
    ];

    $response = $this->actingAs($admin)->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Author created successfully')
        ->assertJsonPath('data.name', 'J.K. Rowling');

    $this->assertDatabaseHas('authors', ['name' => 'J.K. Rowling']);
});

test('store author requires name', function () {
    $admin = User::factory()->admin()->create();

    $response = $this->actingAs($admin)->postJson('/api/authors', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store author with all fields', function () {
    $admin = User::factory()->admin()->create();

    $payload = [
        'name' => 'George Orwell',
        'photo' => 'https://example.com/orwell.jpg',
        'bio' => 'English novelist and essayist.',
    ];

    $response = $this->actingAs($admin)->postJson('/api/authors', $payload);

    $response->assertCreated()
        ->assertJsonPath('data.name', 'George Orwell')
        ->assertJsonPath('data.photo', 'https://example.com/orwell.jpg');
});

test('guest cannot create update or delete authors', function () {
    $author = Author::factory()->create();

    $this->postJson('/api/authors', ['name' => 'Agatha Christie'])->assertUnauthorized();
    $this->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])->assertUnauthorized();
    $this->deleteJson("/api/authors/{$author->id}")->assertUnauthorized();
});

test('non admin cannot create update or delete authors', function () {
    $user = User::factory()->create();
    $author = Author::factory()->create();

    $this->actingAs($user)->postJson('/api/authors', ['name' => 'Agatha Christie'])->assertForbidden();
    $this->actingAs($user)->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])->assertForbidden();
    $this->actingAs($user)->deleteJson("/api/authors/{$author->id}")->assertForbidden();
});

test('admin can update and delete authors', function () {
    $admin = User::factory()->admin()->create();
    $author = Author::factory()->create();

    $this->actingAs($admin)
        ->patchJson("/api/authors/{$author->id}", ['name' => 'Updated Name'])
        ->assertOk()
        ->assertJsonPath('data.name', 'Updated Name');

    $this->actingAs($admin)
        ->deleteJson("/api/authors/{$author->id}")
        ->assertOk();

    $this->assertDatabaseMissing('authors', ['id' => $author->id]);
});
