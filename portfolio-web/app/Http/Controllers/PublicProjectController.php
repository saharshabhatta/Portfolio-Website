<?php

namespace App\Http\Controllers;

use App\Models\ProfileSetting;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class PublicProjectController extends Controller
{
    /**
     * Display the projects showcase page.
     */
    public function __invoke(): Response
    {
        $projects = Project::published()->get();
        $profile = ProfileSetting::current();

        return Inertia::render('Projects', [
            'projects' => $projects,
            'profile' => $profile,
        ]);
    }
}
