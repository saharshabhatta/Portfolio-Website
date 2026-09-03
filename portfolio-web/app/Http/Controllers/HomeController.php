<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Experience;
use App\Models\ProfileSetting;
use App\Models\Project;
use App\Models\SkillCategory;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the dynamic portfolio landing page.
     */
    public function __invoke(): Response
    {
        $profile = ProfileSetting::current();
        $projects = Project::published()->get();
        $experiences = Experience::published()->get();
        $certificates = Certificate::published()->get();
        $skillCategories = SkillCategory::with('skills')->orderBy('order')->get();

        return Inertia::render('Home', [
            'profile' => $profile,
            'projects' => $projects,
            'experiences' => $experiences,
            'certificates' => $certificates,
            'skillCategories' => $skillCategories,
        ]);
    }
}
