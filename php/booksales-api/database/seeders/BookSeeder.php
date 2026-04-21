<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        $books = [
            [
                'title' => 'Harry Potter and the Philosopher\'s Stone',
                'description' => 'A young boy discovers he is a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry.',
                'price' => 125000,
                'stock' => 50,
                'cover_photo' => null,
                'author_name' => 'J.K. Rowling',
                'genre_name' => 'Fiction',
            ],
            [
                'title' => 'It',
                'description' => 'A shapeshifting monster that preys on children in the town of Derry, Maine, taking the form of their greatest fears.',
                'price' => 150000,
                'stock' => 30,
                'cover_photo' => null,
                'author_name' => 'Stephen King',
                'genre_name' => 'Mystery',
            ],
            [
                'title' => 'Bumi',
                'description' => 'Petualangan Raib, seorang remaja yang memiliki kemampuan untuk menghilang, bersama teman-temannya menjelajahi dunia paralel.',
                'price' => 89000,
                'stock' => 75,
                'cover_photo' => null,
                'author_name' => 'Tere Liye',
                'genre_name' => 'Fiction',
            ],
            [
                'title' => 'Laskar Pelangi',
                'description' => 'Kisah sepuluh anak kampung di Belitung yang berjuang untuk mendapatkan pendidikan yang layak.',
                'price' => 79000,
                'stock' => 100,
                'cover_photo' => null,
                'author_name' => 'Andrea Hirata',
                'genre_name' => 'Biography',
            ],
            [
                'title' => 'Murder on the Orient Express',
                'description' => 'Hercule Poirot investigates a murder aboard the famous Orient Express train.',
                'price' => 110000,
                'stock' => 40,
                'cover_photo' => null,
                'author_name' => 'Agatha Christie',
                'genre_name' => 'Mystery',
            ],
        ];

        foreach ($books as $data) {
            $author = Author::where('name', $data['author_name'])->first();
            $genre = Genre::where('name', $data['genre_name'])->first();

            Book::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'price' => $data['price'],
                'stock' => $data['stock'],
                'cover_photo' => $data['cover_photo'],
                'author_id' => $author?->id,
                'genre_id' => $genre?->id,
            ]);
        }
    }
}
