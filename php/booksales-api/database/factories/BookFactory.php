<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Book>
 */
class BookFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3, true),
            'description' => fake()->paragraph(),
            'price' => fake()->randomFloat(2, 50000, 350000),
            'stock' => fake()->numberBetween(1, 100),
            'cover_photo' => null,
            'genre_id' => Genre::inRandomOrder()->value('id'),
            'author_id' => Author::inRandomOrder()->value('id'),
        ];
    }
}
