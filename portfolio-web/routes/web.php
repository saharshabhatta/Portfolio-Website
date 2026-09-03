<?php

use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\ProfileSettingController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SkillCategoryController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicCertificateController;
use App\Http\Controllers\PublicExperienceController;
use App\Http\Controllers\PublicProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/', HomeController::class)->name('home');
Route::get('/projects', PublicProjectController::class)->name('projects');
Route::get('/experience', PublicExperienceController::class)->name('experience');
Route::get('/certificates', PublicCertificateController::class)->name('certificates');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

/*
|--------------------------------------------------------------------------
| Admin & Dashboard Protected Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->group(function () {
    // Alias /dashboard directly to Admin Dashboard
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/', DashboardController::class)->name('index');
        Route::get('/dashboard', DashboardController::class)->name('dashboard');

        // Profile & Site Settings
        Route::get('/profile', [ProfileSettingController::class, 'index'])->name('profile.index');
        Route::post('/profile', [ProfileSettingController::class, 'update'])->name('profile.update');

        // Projects Resource
        Route::resource('projects', ProjectController::class);

        // Experience Resource
        Route::resource('experience', ExperienceController::class);

        // Certificates Resource
        Route::resource('certificates', CertificateController::class);

        // Skills & Categories
        Route::get('/skills', [SkillCategoryController::class, 'index'])->name('skills.index');
        Route::post('/skill-categories', [SkillCategoryController::class, 'store'])->name('skill-categories.store');
        Route::put('/skill-categories/{category}', [SkillCategoryController::class, 'update'])->name('skill-categories.update');
        Route::delete('/skill-categories/{category}', [SkillCategoryController::class, 'destroy'])->name('skill-categories.destroy');

        Route::post('/skills', [SkillController::class, 'store'])->name('skills.store');
        Route::put('/skills/{skill}', [SkillController::class, 'update'])->name('skills.update');
        Route::delete('/skills/{skill}', [SkillController::class, 'destroy'])->name('skills.destroy');

        // Messages Inbox
        Route::get('/messages', [ContactMessageController::class, 'index'])->name('messages.index');
        Route::patch('/messages/{message}/toggle-read', [ContactMessageController::class, 'toggleRead'])->name('messages.toggle-read');
        Route::delete('/messages/{message}', [ContactMessageController::class, 'destroy'])->name('messages.destroy');
    });

    // Breeze user account settings
    Route::get('/user/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/user/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/user/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
