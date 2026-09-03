<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Store a new skill item within a category.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'skill_category_id' => ['required', 'exists:skill_categories,id'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'proficiency' => ['nullable', 'integer', 'min:1', 'max:100'],
            'order' => ['nullable', 'integer'],
        ]);

        Skill::create($validated);

        return redirect()->back()->with('success', 'Skill added successfully.');
    }

    /**
     * Update an existing skill item.
     */
    public function update(Request $request, Skill $skill): RedirectResponse
    {
        $validated = $request->validate([
            'skill_category_id' => ['required', 'exists:skill_categories,id'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'proficiency' => ['nullable', 'integer', 'min:1', 'max:100'],
            'order' => ['nullable', 'integer'],
        ]);

        $skill->update($validated);

        return redirect()->back()->with('success', 'Skill updated successfully.');
    }

    /**
     * Remove a skill item.
     */
    public function destroy(Skill $skill): RedirectResponse
    {
        $skill->delete();

        return redirect()->back()->with('success', 'Skill removed successfully.');
    }
}
