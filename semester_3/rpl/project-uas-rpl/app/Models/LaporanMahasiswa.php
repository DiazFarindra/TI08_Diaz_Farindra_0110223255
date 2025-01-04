<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LaporanMahasiswa extends Model
{
    protected $fillable = [
        'mahasiswa_id',
        'nim',
        'judul',
        'tanggal',
        'status',
    ];

    public function mahasiswa()
    {
        return $this->belongsTo(Mahasiswa::class, 'mahasiswa_id');
    }
}
