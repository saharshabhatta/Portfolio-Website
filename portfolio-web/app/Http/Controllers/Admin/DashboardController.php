<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\ContactMessage;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SkillCategory;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the Admin Dashboard overview.
     */
    public function __invoke(): Response
    {
        $stats = [
            'total_projects' => Project::count(),
            'published_projects' => Project::where('is_published', true)->count(),
            'total_experiences' => Experience::count(),
            'total_certificates' => Certificate::count(),
            'total_skills' => Skill::count(),
            'total_categories' => SkillCategory::count(),
            'total_messages' => ContactMessage::count(),
            'unread_messages' => ContactMessage::unread()->count(),
        ];

        $recentMessages = ContactMessage::latest()->take(5)->get();
        $recentProjects = Project::latest()->take(4)->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentMessages' => $recentMessages,
            'recentProjects' => $recentProjects,
        ]);
    }
}
