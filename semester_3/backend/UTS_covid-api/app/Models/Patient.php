<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Patient extends Model
{
    protected $fillable = [
        'status_id',
        'name',
        'phone',
        'address',
        'checkin_at',
        'checkout_at',
    ];

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
}
