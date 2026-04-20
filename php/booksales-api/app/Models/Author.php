<?php

namespace App\Models;

class Author
{
    /**
     * @return array<int, array{id: int, name: string, photo: string, bio: string}>
     */
    public static function all(): array
    {
        return [
            ['id' => 1, 'name' => 'J.K. Rowling', 'photo' => 'jk_rowling.jpg', 'bio' => 'British author best known for the Harry Potter fantasy series.'],
            ['id' => 2, 'name' => 'Stephen King', 'photo' => 'stephen_king.jpg', 'bio' => 'American author of horror, supernatural fiction, and suspense novels.'],
            ['id' => 3, 'name' => 'Tere Liye', 'photo' => 'tere_liye.jpg', 'bio' => 'Indonesian author known for inspirational and romantic novels.'],
            ['id' => 4, 'name' => 'Andrea Hirata', 'photo' => 'andrea_hirata.jpg', 'bio' => 'Indonesian author famous for the Laskar Pelangi tetralogy.'],
            ['id' => 5, 'name' => 'Agatha Christie', 'photo' => 'agatha_christie.jpg', 'bio' => 'English writer known for her sixty-six detective novels and fourteen short story collections.'],
        ];
    }
}
