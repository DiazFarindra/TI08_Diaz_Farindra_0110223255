<?php

namespace Database\Seeders;

use App\Models\Animal;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Animal::query()->insert([
            [
                'name' => 'dog',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'cat',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'fish',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}