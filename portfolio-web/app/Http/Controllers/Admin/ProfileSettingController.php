<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProfileSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileSettingController extends Controller
{
    /**
     * Display the profile settings form.
     */
    public function index(): Response
    {
        $profile = ProfileSetting::current();

        return Inertia::render('Admin/Profile/Index', [
            'profile' => $profile,
        ]);
    }

    /**
     * Update the profile settings.
     */
    public function update(Request $request): RedirectResponse
    {
        $profile = ProfileSetting::first() ?? new ProfileSetting();

        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'title_prefix' => ['required', 'string', 'max:255'],
            'title_highlight' => ['required', 'string', 'max:255'],
            'headline' => ['required', 'string', 'max:255'],
            'sub_headline' => ['nullable', 'string', 'max:255'],
            'about_heading' => ['nullable', 'string', 'max:255'],
            'about_intro' => ['nullable', 'string', 'max:2000'],
            'about_description' => ['nullable', 'string', 'max:5000'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'location' => ['required', 'string', 'max:255'],
            'availability_status' => ['required', 'string', 'max:255'],
            'is_available_for_hire' => ['boolean'],
            'resume_url' => ['nullable', 'string', 'max:500'],
            'resume_file' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:10240'],
            'avatar_image' => ['nullable', 'string', 'max:500'],
            'avatar_file' => ['nullable', 'image', 'max:5120'],
            'experience_badge_label' => ['nullable', 'string', 'max:100'],
            'experience_badge_value' => ['nullable', 'string', 'max:100'],
            'focus_badge_label' => ['nullable', 'string', 'max:100'],
            'focus_badge_value' => ['nullable', 'string', 'max:100'],
            'tech_stack_tags' => ['nullable', 'array'],
            'social_links' => ['nullable', 'array'],
        ]);

        if ($request->hasFile('resume_file')) {
            $path = $request->file('resume_file')->store('resumes', 'public');
            $validated['resume_url'] = '/storage/' . $path;
        }

        if ($request->hasFile('avatar_file')) {
            $path = $request->file('avatar_file')->store('avatars', 'public');
            $validated['avatar_image'] = '/storage/' . $path;
        }

        unset($validated['resume_file'], $validated['avatar_file']);

        $profile->fill($validated);
        $profile->save();

        return redirect()->back()->with('success', 'Profile and hero settings updated successfully.');
    }
}
