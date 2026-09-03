<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\ProfileSetting;
use Inertia\Inertia;
use Inertia\Response;

class PublicExperienceController extends Controller
{
    /**
     * Display the experience timeline page.
     */
    public function __invoke(): Response
    {
        $experiences = Experience::published()->get();
        $profile = ProfileSetting::current();

        return Inertia::render('Experience', [
            'experiences' => $experiences,
            'profile' => $profile,
        ]);
    }
}
