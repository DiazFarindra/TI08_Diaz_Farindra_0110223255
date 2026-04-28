<?php

use App\Models\Genre;
use App\Models\User;
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

test('can fetch a single genre without authentication', function () {
    $genre = Genre::factory()->create();

    $response = $this->getJson("/api/genres/{$genre->id}");

    $response->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.id', $genre->id);
});

test('can create a genre', function () {
    $admin = User::factory()->admin()->create();

    $payload = [
        'name' => 'Fiction',
        'description' => 'Fictional stories',
    ];

    $response = $this->actingAs($admin)->postJson('/api/genres', $payload);

    $response->assertCreated()
        ->assertJsonPath('success', true)
        ->assertJsonPath('message', 'Genre created successfully')
        ->assertJsonPath('data.name', 'Fiction');

    $this->assertDatabaseHas('genres', ['name' => 'Fiction']);
});

test('store genre requires name', function () {
    $admin = User::factory()->admin()->create();

    $response = $this->actingAs($admin)->postJson('/api/genres', []);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('store genre name must be unique', function () {
    $admin = User::factory()->admin()->create();

    Genre::factory()->create(['name' => 'Horror']);

    $response = $this->actingAs($admin)->postJson('/api/genres', ['name' => 'Horror']);

    $response->assertUnprocessable()
        ->assertJsonValidationErrors(['name']);
});

test('guest cannot create update or delete genres', function () {
    $genre = Genre::factory()->create();

    $this->postJson('/api/genres', ['name' => 'Drama'])->assertUnauthorized();
    $this->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])->assertUnauthorized();
    $this->deleteJson("/api/genres/{$genre->id}")->assertUnauthorized();
});

test('non admin cannot create update or delete genres', function () {
    $user = User::factory()->create();
    $genre = Genre::factory()->create();

    $this->actingAs($user)->postJson('/api/genres', ['name' => 'Drama'])->assertForbidden();
    $this->actingAs($user)->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])->assertForbidden();
    $this->actingAs($user)->deleteJson("/api/genres/{$genre->id}")->assertForbidden();
});

test('admin can update and delete genres', function () {
    $admin = User::factory()->admin()->create();
    $genre = Genre::factory()->create();

    $this->actingAs($admin)
        ->patchJson("/api/genres/{$genre->id}", ['name' => 'Updated Name'])
        ->assertOk()
        ->assertJsonPath('data.name', 'Updated Name');

    $this->actingAs($admin)
        ->deleteJson("/api/genres/{$genre->id}")
        ->assertOk();

    $this->assertDatabaseMissing('genres', ['id' => $genre->id]);
});
