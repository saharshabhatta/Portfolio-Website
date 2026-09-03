<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\ProfileSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index(): Response
    {
        $profile = ProfileSetting::current();

        return Inertia::render('Contact', [
            'profile' => $profile,
        ]);
    }

    /**
     * Store a newly submitted contact inquiry.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'subject' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        ContactMessage::create([
            ...$validated,
            'ip_address' => $request->ip(),
            'is_read' => false,
        ]);

        return back()->with('success', 'Thank you! Your message has been sent successfully. I will get back to you soon.');
    }
}
