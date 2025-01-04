<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Akun extends Model
{
    protected $fillable = [
        'nama',
        'nim',
        'email',
        'telpone',
        'peran',
        'status',
        'created_at',
    ];
}
