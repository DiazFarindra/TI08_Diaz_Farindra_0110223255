<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penjadwalan extends Model
{
    protected $fillable = [
        'mahasiswa_id',
        'dosen_id',
        'tanggal',
        'jam',
        'topik',
        'status',
    ];

    public function mahasiswa()
    {
        return $this->belongsTo(Mahasiswa::class);
    }

    public function dosen()
    {
        return $this->belongsTo(Dosen::class);
    }
}
