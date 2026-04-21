<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        $genres = [
            ['name' => 'Fiction', 'description' => 'Imaginative and narrative storytelling not based on real events.'],
            ['name' => 'Non-Fiction', 'description' => 'Factual writing based on real events, people, and places.'],
            ['name' => 'Science Fiction', 'description' => 'Speculative stories involving futuristic science and technology.'],
            ['name' => 'Mystery', 'description' => 'Stories centered around solving a crime or uncovering secrets.'],
            ['name' => 'Biography', 'description' => 'Account of a person\'s life written by someone else.'],
        ];

        foreach ($genres as $genre) {
            Genre::create($genre);
        }
    }
}
