<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExperienceController extends Controller
{
    /**
     * Display a listing of experience entries.
     */
    public function index(): Response
    {
        $experiences = Experience::orderBy('order')->latest('id')->get();

        return Inertia::render('Admin/Experience/Index', [
            'experiences' => $experiences,
        ]);
    }

    /**
     * Show the form for creating a new experience entry.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Experience/Create');
    }

    /**
     * Store a newly created experience entry in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'role' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'period' => ['required', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'skills' => ['nullable', 'array'],
            'description' => ['required', 'string', 'max:2000'],
            'icon' => ['nullable', 'string', 'max:100'],
            'order' => ['nullable', 'integer'],
            'is_published' => ['boolean'],
        ]);

        Experience::create($validated);

        return redirect()->route('admin.experience.index')->with('success', 'Experience record created successfully.');
    }

    /**
     * Show the form for editing the specified experience entry.
     */
    public function edit(Experience $experience): Response
    {
        return Inertia::render('Admin/Experience/Edit', [
            'experience' => $experience,
        ]);
    }

    /**
     * Update the specified experience entry in storage.
     */
    public function update(Request $request, Experience $experience): RedirectResponse
    {
        $validated = $request->validate([
            'role' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'period' => ['required', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'skills' => ['nullable', 'array'],
            'description' => ['required', 'string', 'max:2000'],
            'icon' => ['nullable', 'string', 'max:100'],
            'order' => ['nullable', 'integer'],
            'is_published' => ['boolean'],
        ]);

        $experience->update($validated);

        return redirect()->route('admin.experience.index')->with('success', 'Experience record updated successfully.');
    }

    /**
     * Remove the specified experience entry from storage.
     */
    public function destroy(Experience $experience): RedirectResponse
    {
        $experience->delete();

        return redirect()->route('admin.experience.index')->with('success', 'Experience record deleted successfully.');
    }
}
