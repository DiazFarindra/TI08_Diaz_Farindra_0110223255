<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    protected $fillable = [
        'name',
    ];

    public function patients(): HasMany
    {
        return $this->hasMany(Patient::class);
    }
}