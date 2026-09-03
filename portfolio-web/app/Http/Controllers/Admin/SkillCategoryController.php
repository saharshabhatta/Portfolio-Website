<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SkillCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SkillCategoryController extends Controller
{
    /**
     * Display skills and categories manager.
     */
    public function index(): Response
    {
        $categories = SkillCategory::with('skills')->orderBy('order')->get();

        return Inertia::render('Admin/Skills/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a new skill category.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'number' => ['required', 'string', 'max:10'],
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'icon' => ['nullable', 'string', 'max:100'],
            'order' => ['nullable', 'integer'],
        ]);

        SkillCategory::create($validated);

        return redirect()->back()->with('success', 'Skill category created successfully.');
    }

    /**
     * Update an existing skill category.
     */
    public function update(Request $request, SkillCategory $category): RedirectResponse
    {
        $validated = $request->validate([
            'number' => ['required', 'string', 'max:10'],
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'icon' => ['nullable', 'string', 'max:100'],
            'order' => ['nullable', 'integer'],
        ]);

        $category->update($validated);

        return redirect()->back()->with('success', 'Skill category updated successfully.');
    }

    /**
     * Remove a skill category.
     */
    public function destroy(SkillCategory $category): RedirectResponse
    {
        $category->delete();

        return redirect()->back()->with('success', 'Skill category and associated skills deleted successfully.');
    }
}
