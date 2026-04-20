<?php

namespace App\Models;

class Genre
{
    /**
     * @return array<int, array{id: int, name: string, description: string}>
     */
    public static function all(): array
    {
        return [
            ['id' => 1, 'name' => 'Fiction', 'description' => 'Imaginative and narrative storytelling not based on real events.'],
            ['id' => 2, 'name' => 'Non-Fiction', 'description' => 'Factual writing based on real events, people, and places.'],
            ['id' => 3, 'name' => 'Science Fiction', 'description' => 'Speculative stories involving futuristic science and technology.'],
            ['id' => 4, 'name' => 'Mystery', 'description' => 'Stories centered around solving a crime or uncovering secrets.'],
            ['id' => 5, 'name' => 'Biography', 'description' => 'Account of a person\'s life written by someone else.'],
        ];
    }
}
