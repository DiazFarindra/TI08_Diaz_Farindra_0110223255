<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    use HasFactory;

    protected $table = 'pasien';

    public $timestamps = false;

    protected $fillable = [
        'kelurahan_id',
        'kode',
        'nama',
        'tmp_lahir',
        'tgl_lahir',
        'gender',
        'email',
        'alamat',
    ];

    public function kelurahan()
    {
        return $this->belongsTo(Kelurahan::class);
    }
}
