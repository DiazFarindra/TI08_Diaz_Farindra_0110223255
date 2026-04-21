<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        $authors = [
            ['name' => 'J.K. Rowling', 'photo' => null, 'bio' => 'British author best known for the Harry Potter fantasy series.'],
            ['name' => 'Stephen King', 'photo' => null, 'bio' => 'American author of horror, supernatural fiction, and suspense novels.'],
            ['name' => 'Tere Liye', 'photo' => null, 'bio' => 'Indonesian author known for inspirational and romantic novels.'],
            ['name' => 'Andrea Hirata', 'photo' => null, 'bio' => 'Indonesian author famous for the Laskar Pelangi tetralogy.'],
            ['name' => 'Agatha Christie', 'photo' => null, 'bio' => 'English writer known for her sixty-six detective novels and fourteen short story collections.'],
        ];

        foreach ($authors as $author) {
            Author::create($author);
        }
    }
}
