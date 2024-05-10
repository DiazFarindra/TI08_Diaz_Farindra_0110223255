<?php

namespace Database\Seeders;

use App\Models\Kecamatan;
use App\Models\Kelurahan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KelurahanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'kecamatan_id' => Kecamatan::first()->id,
                'name' => 'sukamaju',
            ],
        ])->each(function (array $kelurahan) {
            Kelurahan::create($kelurahan);
        });
    }
}
