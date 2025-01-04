<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dosen extends Model
{
    protected $fillable =
    [
        'nama',
    ];

    public function pemberitahuan()
    {
        return $this->hasMany(Informasi::class);
    }

    public function jadwal()
    {
        return $this->hasMany(Penjadwalan::class);
    }
}