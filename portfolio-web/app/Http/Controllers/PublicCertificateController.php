<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\ProfileSetting;
use Inertia\Inertia;
use Inertia\Response;

class PublicCertificateController extends Controller
{
    /**
     * Display the certificates page.
     */
    public function __invoke(): Response
    {
        $certificates = Certificate::published()->get();
        $profile = ProfileSetting::current();

        return Inertia::render('Certificates', [
            'certificates' => $certificates,
            'profile' => $profile,
        ]);
    }
}
