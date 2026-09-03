<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CertificateController extends Controller
{
    /**
     * Display a listing of certificates.
     */
    public function index(): Response
    {
        $certificates = Certificate::orderBy('order')->latest('id')->get();

        return Inertia::render('Admin/Certificates/Index', [
            'certificates' => $certificates,
        ]);
    }

    /**
     * Show the form for creating a new certificate.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Certificates/Create');
    }

    /**
     * Store a newly created certificate in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'issuer' => ['required', 'string', 'max:255'],
            'year' => ['required', 'string', 'max:50'],
            'focus' => ['required', 'string', 'max:1000'],
            'link' => ['nullable', 'string', 'max:500'],
            'image' => ['nullable', 'string', 'max:500'],
            'image_file' => ['nullable', 'image', 'max:5120'],
            'order' => ['nullable', 'integer'],
            'is_published' => ['boolean'],
        ]);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('certificates', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        unset($validated['image_file']);

        Certificate::create($validated);

        return redirect()->route('admin.certificates.index')->with('success', 'Certificate created successfully.');
    }

    /**
     * Show the form for editing the specified certificate.
     */
    public function edit(Certificate $certificate): Response
    {
        return Inertia::render('Admin/Certificates/Edit', [
            'certificate' => $certificate,
        ]);
    }

    /**
     * Update the specified certificate in storage.
     */
    public function update(Request $request, Certificate $certificate): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'issuer' => ['required', 'string', 'max:255'],
            'year' => ['required', 'string', 'max:50'],
            'focus' => ['required', 'string', 'max:1000'],
            'link' => ['nullable', 'string', 'max:500'],
            'image' => ['nullable', 'string', 'max:500'],
            'image_file' => ['nullable', 'image', 'max:5120'],
            'order' => ['nullable', 'integer'],
            'is_published' => ['boolean'],
        ]);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('certificates', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        unset($validated['image_file']);

        $certificate->update($validated);

        return redirect()->route('admin.certificates.index')->with('success', 'Certificate updated successfully.');
    }

    /**
     * Remove the specified certificate from storage.
     */
    public function destroy(Certificate $certificate): RedirectResponse
    {
        $certificate->delete();

        return redirect()->route('admin.certificates.index')->with('success', 'Certificate deleted successfully.');
    }
}
