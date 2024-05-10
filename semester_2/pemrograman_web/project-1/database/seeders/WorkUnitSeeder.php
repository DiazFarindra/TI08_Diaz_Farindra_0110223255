<?php

namespace Database\Seeders;

use App\Models\WorkUnit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'RS. Polri',
            ],
            [
                'name' => 'RS. Mayapada',
            ],
            [
                'name' => 'RS. Siloam',
            ],
        ])->each(function (array $unit) {
            WorkUnit::create($unit);
        });
    }
}
