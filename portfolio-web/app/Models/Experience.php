<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'company',
        'period',
        'location',
        'skills',
        'description',
        'icon',
        'order',
        'is_published',
    ];

    protected $casts = [
        'skills' => 'array',
        'is_published' => 'boolean',
        'order' => 'integer',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true)->orderBy('order')->latest('id');
    }
}
