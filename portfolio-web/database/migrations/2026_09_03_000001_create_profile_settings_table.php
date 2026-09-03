<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profile_settings', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->default('Saharsha Bhatta');
            $table->string('title_prefix')->default('Saharsha');
            $table->string('title_highlight')->default('Bhatta');
            $table->string('headline')->default('Full Stack Developer specializing in Laravel and React.');
            $table->string('sub_headline')->nullable()->default('I build ideas into digital products.');
            $table->string('about_heading')->nullable()->default('I build ideas into digital products.');
            $table->text('about_intro')->nullable();
            $table->text('about_description')->nullable();
            $table->string('email')->default('hello@saharsha.dev');
            $table->string('phone')->nullable();
            $table->string('location')->default('Nepal · Available Remote');
            $table->string('availability_status')->default('Available for new opportunities');
            $table->boolean('is_available_for_hire')->default(true);
            $table->string('resume_url')->nullable();
            $table->string('avatar_image')->nullable();
            $table->string('experience_badge_label')->default('Career Started');
            $table->string('experience_badge_value')->default('2025');
            $table->string('focus_badge_label')->default('Core Focus');
            $table->string('focus_badge_value')->default('Full-Stack');
            $table->json('tech_stack_tags')->nullable();
            $table->json('social_links')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_settings');
    }
};
