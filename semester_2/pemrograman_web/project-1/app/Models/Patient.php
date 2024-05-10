<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    use HasFactory;

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::creating(function (patient $patient) {
            $list = '0001';
            $holder = 'PASIEN';

            $latestCode = Patient::latest()->first()->code ?? null;

            if ($latestCode) {
                $n = substr($latestCode, -4);
                $code = str_pad($n + 1, 4, 0, STR_PAD_LEFT);

                $patient->code = $holder.$code;
                return;
            }

            $patient->code = $holder.$list;
        });
    }

    public function checkups(): HasMany
    {
        return $this->hasMany(Checkup::class);
    }

    public function kelurahan(): BelongsTo
    {
        return $this->belongsTo(Kelurahan::class, 'kelurahan_id');
    }
}
