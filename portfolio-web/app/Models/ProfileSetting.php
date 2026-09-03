<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'title_prefix',
        'title_highlight',
        'headline',
        'sub_headline',
        'about_heading',
        'about_intro',
        'about_description',
        'email',
        'phone',
        'location',
        'availability_status',
        'is_available_for_hire',
        'resume_url',
        'avatar_image',
        'experience_badge_label',
        'experience_badge_value',
        'focus_badge_label',
        'focus_badge_value',
        'tech_stack_tags',
        'social_links',
    ];

    protected $casts = [
        'is_available_for_hire' => 'boolean',
        'tech_stack_tags' => 'array',
        'social_links' => 'array',
    ];

    /**
     * Get the single active profile setting instance or a populated default.
     */
    public static function current(): self
    {
        return static::first() ?? new static([
            'full_name' => 'Saharsha Bhatta',
            'title_prefix' => 'Saharsha',
            'title_highlight' => 'Bhatta',
            'headline' => 'Full Stack Developer specializing in Laravel and React.',
            'sub_headline' => 'I build ideas into digital products.',
            'about_heading' => 'I build ideas into digital products.',
            'about_intro' => "I'm Saharsha Bhatta, a Full Stack Developer focused on building modern web applications using Laravel and React.",
            'about_description' => "I enjoy working across both frontend and backend development — from designing clean user interfaces and reusable React components to developing APIs, database structures, and robust application logic with Laravel.\n\nMy goal is simple: build software that is clean, practical, maintainable, and genuinely useful to the people using it.",
            'email' => 'hello@saharsha.dev',
            'location' => 'Nepal · Available Remote',
            'availability_status' => 'Available for new opportunities',
            'is_available_for_hire' => true,
            'experience_badge_label' => 'Career Started',
            'experience_badge_value' => '2025',
            'focus_badge_label' => 'Core Focus',
            'focus_badge_value' => 'Full-Stack',
            'tech_stack_tags' => ['Laravel', 'PHP', 'React', 'TypeScript', 'JavaScript', 'MySQL', 'Tailwind CSS', 'REST API'],
            'social_links' => [
                ['platform' => 'Facebook', 'url' => '#facebook', 'handle' => '@saharsha', 'icon' => 'Facebook', 'order' => 1],
                ['platform' => 'Dribbble', 'url' => '#dribbble', 'handle' => '@saharsha', 'icon' => 'Dribbble', 'order' => 2],
                ['platform' => 'Behance', 'url' => '#behance', 'handle' => '@saharsha', 'icon' => 'Behance', 'order' => 3],
                ['platform' => 'LinkedIn', 'url' => 'https://linkedin.com', 'handle' => 'Saharsha Bhatta', 'icon' => 'Linkedin', 'order' => 4],
                ['platform' => 'GitHub', 'url' => 'https://github.com', 'handle' => '@saharsha', 'icon' => 'Github', 'order' => 5],
            ],
        ]);
    }
}
