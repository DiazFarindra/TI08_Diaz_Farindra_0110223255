<?php

namespace Database\Seeders;

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
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
        ]);

        $this->call(KecamatanSeeder::class);
        $this->call(KelurahanSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(WorkUnitSeeder::class);
    }
}
