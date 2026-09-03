<?php

namespace Database\Seeders;

use App\Models\Certificate;
use App\Models\ContactMessage;
use App\Models\Experience;
use App\Models\ProfileSetting;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SkillCategory;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Admin User
        User::firstOrCreate(
            ['email' => 'admin@portfolio.test'],
            [
                'name' => 'Saharsha Bhatta',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // 2. Profile Settings
        ProfileSetting::updateOrCreate(
            ['id' => 1],
            [
                'full_name' => 'Saharsha Bhatta',
                'title_prefix' => 'Saharsha',
                'title_highlight' => 'Bhatta',
                'headline' => 'Full Stack Developer specializing in Laravel and React.',
                'sub_headline' => 'I build ideas into digital products.',
                'about_heading' => 'I build ideas into digital products.',
                'about_intro' => "I'm Saharsha Bhatta, a Full Stack Developer focused on building modern web applications using Laravel and React.",
                'about_description' => "I enjoy working across both frontend and backend development — from designing clean user interfaces and reusable React components to developing APIs, database structures, and robust application logic with Laravel.\n\nMy goal is simple: build software that is clean, practical, maintainable, and genuinely useful to the people using it.",
                'email' => 'hello@saharsha.dev',
                'phone' => '+977-9800000000',
                'location' => 'Nepal · Available Remote',
                'availability_status' => 'Available for new opportunities',
                'is_available_for_hire' => true,
                'resume_url' => '#resume',
                'avatar_image' => null,
                'experience_badge_label' => 'Career Started',
                'experience_badge_value' => '2025',
                'focus_badge_label' => 'Core Focus',
                'focus_badge_value' => 'Full-Stack',
                'tech_stack_tags' => [
                    'Laravel',
                    'PHP',
                    'React',
                    'TypeScript',
                    'JavaScript',
                    'MySQL',
                    'Tailwind CSS',
                    'REST API',
                ],
                'social_links' => [
                    [
                        'platform' => 'Facebook',
                        'url' => '#facebook',
                        'handle' => '@saharsha',
                        'icon' => 'Facebook',
                        'order' => 1,
                    ],
                    [
                        'platform' => 'Dribbble',
                        'url' => '#dribbble',
                        'handle' => '@saharsha',
                        'icon' => 'Dribbble',
                        'order' => 2,
                    ],
                    [
                        'platform' => 'Behance',
                        'url' => '#behance',
                        'handle' => '@saharsha',
                        'icon' => 'Behance',
                        'order' => 3,
                    ],
                    [
                        'platform' => 'LinkedIn',
                        'url' => 'https://linkedin.com',
                        'handle' => 'Saharsha Bhatta',
                        'icon' => 'Linkedin',
                        'order' => 4,
                    ],
                    [
                        'platform' => 'GitHub',
                        'url' => 'https://github.com',
                        'handle' => '@saharsha',
                        'icon' => 'Github',
                        'order' => 5,
                    ],
                    [
                        'platform' => 'Instagram',
                        'url' => 'https://instagram.com',
                        'handle' => '@saharsha',
                        'icon' => 'Instagram',
                        'order' => 6,
                    ],
                ],
            ]
        );

        // 3. Projects
        $projects = [
            [
                'title' => 'Portfolio Platform',
                'slug' => 'portfolio-platform',
                'type' => 'Personal Project',
                'description' => 'A responsive portfolio platform designed to present projects, experience, certificates, and technical skills through a clean and consistent interface.',
                'content' => 'Comprehensive portfolio website built with modern Laravel, Inertia.js, React, TypeScript, and Tailwind CSS. Features full administrative CMS control over all sections.',
                'stack' => ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'],
                'highlights' => ['Dynamic Content Delivery', 'Dark/Light Theme Support', 'Modular UI Architecture'],
                'icon' => 'Layers3',
                'image' => '/images/projects/portfolio-preview.jpg',
                'link' => '#',
                'github_link' => 'https://github.com',
                'order' => 1,
                'is_featured' => true,
                'is_published' => true,
            ],
            [
                'title' => 'Business Dashboard',
                'slug' => 'business-dashboard',
                'type' => 'Web Application',
                'description' => 'A practical business dashboard built around clear data presentation, reusable interfaces, backend integrations, and efficient user workflows.',
                'content' => 'Robust enterprise dashboard featuring real-time data visualizations, role-based access control, relational database management, and asynchronous operations.',
                'stack' => ['Laravel', 'Inertia', 'MySQL', 'React'],
                'highlights' => ['RESTful API Integration', 'Role-based Access', 'Real-time Analytics View'],
                'icon' => 'Code2',
                'image' => '/images/projects/dashboard-preview.jpg',
                'link' => '#',
                'github_link' => 'https://github.com',
                'order' => 2,
                'is_featured' => true,
                'is_published' => true,
            ],
            [
                'title' => 'Mobile-first Commerce',
                'slug' => 'mobile-first-commerce',
                'type' => 'Frontend Experience',
                'description' => 'A responsive commerce interface focused on product discovery, clean interactions, mobile usability, and fast frontend performance.',
                'content' => 'High-performance e-commerce frontend architecture emphasizing mobile touch interactions, sub-second route transitions, and sleek design aesthetics.',
                'stack' => ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
                'highlights' => ['Optimized Core Web Vitals', 'Sub-second Page Loads', 'Touch-friendly Navigation'],
                'icon' => 'Smartphone',
                'image' => '/images/projects/commerce-preview.jpg',
                'link' => '#',
                'github_link' => 'https://github.com',
                'order' => 3,
                'is_featured' => true,
                'is_published' => true,
            ],
        ];

        foreach ($projects as $proj) {
            Project::updateOrCreate(['slug' => $proj['slug']], $proj);
        }

        // 4. Experiences
        $experiences = [
            [
                'role' => 'Software Developer',
                'company' => 'Professional Experience',
                'period' => 'Oct 2025 — Present',
                'location' => 'Remote / Hybrid',
                'skills' => ['Laravel', 'React', 'TypeScript', 'REST APIs'],
                'description' => 'Working on modern web applications across frontend and backend development, building maintainable features, APIs, reusable interfaces, and practical solutions using relational databases and contemporary frameworks.',
                'icon' => 'Code2',
                'order' => 1,
                'is_published' => true,
            ],
            [
                'role' => 'Software Developer Intern',
                'company' => 'Internship Experience',
                'period' => 'Jun 2025 — Sep 2025',
                'location' => 'Remote',
                'skills' => ['Full Stack', 'Git Flow', 'Testing', 'Clean Code'],
                'description' => 'Gained hands-on software development experience by contributing to real-world projects, implementing features, fixing issues, working with existing codebases, and collaborating within an agile development workflow.',
                'icon' => 'BriefcaseBusiness',
                'order' => 2,
                'is_published' => true,
            ],
        ];

        foreach ($experiences as $index => $exp) {
            Experience::updateOrCreate(
                ['role' => $exp['role'], 'period' => $exp['period']],
                $exp
            );
        }

        // 5. Certificates
        $certificates = [
            [
                'title' => 'Laravel Development',
                'issuer' => 'Professional Learning',
                'year' => '2025',
                'focus' => 'Application architecture, REST APIs, database design, and modern PHP development practices.',
                'link' => '#',
                'image' => '/images/certificates/laravel-cert.jpg',
                'order' => 1,
                'is_published' => true,
            ],
            [
                'title' => 'React & TypeScript',
                'issuer' => 'Professional Learning',
                'year' => '2025',
                'focus' => 'Component-driven interfaces, reusable frontend architecture, and type-safe application development.',
                'link' => '#',
                'image' => '/images/certificates/react-cert.jpg',
                'order' => 2,
                'is_published' => true,
            ],
            [
                'title' => 'Responsive Web Design',
                'issuer' => 'Professional Learning',
                'year' => '2024',
                'focus' => 'Responsive layouts, accessible interfaces, and adaptable user experiences across different devices.',
                'link' => '#',
                'image' => '/images/certificates/web-design-cert.jpg',
                'order' => 3,
                'is_published' => true,
            ],
        ];

        foreach ($certificates as $cert) {
            Certificate::updateOrCreate(['title' => $cert['title']], $cert);
        }

        // 6. Skill Categories & Skills
        $categories = [
            [
                'number' => '01',
                'title' => 'Backend',
                'subtitle' => 'Server & application logic',
                'icon' => 'Server',
                'order' => 1,
                'skills' => [
                    [
                        'name' => 'Laravel',
                        'description' => 'Application architecture, APIs, and backend development.',
                        'proficiency' => 95,
                        'order' => 1,
                    ],
                    [
                        'name' => 'PHP',
                        'description' => 'Object-oriented development and server-side logic.',
                        'proficiency' => 90,
                        'order' => 2,
                    ],
                    [
                        'name' => 'REST APIs',
                        'description' => 'Designing and integrating maintainable APIs.',
                        'proficiency' => 92,
                        'order' => 3,
                    ],
                ],
            ],
            [
                'number' => '02',
                'title' => 'Frontend',
                'subtitle' => 'Interfaces & interaction',
                'icon' => 'Code2',
                'order' => 2,
                'skills' => [
                    [
                        'name' => 'React',
                        'description' => 'Reusable components and interactive interfaces.',
                        'proficiency' => 92,
                        'order' => 1,
                    ],
                    [
                        'name' => 'TypeScript',
                        'description' => 'Type-safe and maintainable frontend applications.',
                        'proficiency' => 88,
                        'order' => 2,
                    ],
                    [
                        'name' => 'Tailwind CSS',
                        'description' => 'Responsive and consistent user interface styling.',
                        'proficiency' => 95,
                        'order' => 3,
                    ],
                ],
            ],
            [
                'number' => '03',
                'title' => 'Database',
                'subtitle' => 'Data & relationships',
                'icon' => 'Database',
                'order' => 3,
                'skills' => [
                    [
                        'name' => 'MySQL',
                        'description' => 'Relational database design and querying.',
                        'proficiency' => 88,
                        'order' => 1,
                    ],
                    [
                        'name' => 'Eloquent ORM',
                        'description' => 'Models, relationships, and application data access.',
                        'proficiency' => 92,
                        'order' => 2,
                    ],
                    [
                        'name' => 'Data Modelling',
                        'description' => 'Structuring data around practical application requirements.',
                        'proficiency' => 85,
                        'order' => 3,
                    ],
                ],
            ],
            [
                'number' => '04',
                'title' => 'Workflow & Tools',
                'subtitle' => 'Development practices',
                'icon' => 'GitBranch',
                'order' => 4,
                'skills' => [
                    [
                        'name' => 'Git & GitHub',
                        'description' => 'Version control, branching strategies, and collaboration.',
                        'proficiency' => 90,
                        'order' => 1,
                    ],
                    [
                        'name' => 'Vite & Build Tools',
                        'description' => 'Modern asset bundling and development tooling.',
                        'proficiency' => 85,
                        'order' => 2,
                    ],
                    [
                        'name' => 'Clean Architecture',
                        'description' => 'Readable, scalable, and maintainable code structure.',
                        'proficiency' => 90,
                        'order' => 3,
                    ],
                ],
            ],
        ];

        foreach ($categories as $catData) {
            $skillsData = $catData['skills'];
            unset($catData['skills']);

            $cat = SkillCategory::updateOrCreate(
                ['title' => $catData['title']],
                $catData
            );

            foreach ($skillsData as $skillData) {
                Skill::updateOrCreate(
                    [
                        'skill_category_id' => $cat->id,
                        'name' => $skillData['name'],
                    ],
                    $skillData
                );
            }
        }

        // 7. Initial Demo Message
        ContactMessage::firstOrCreate(
            ['email' => 'john.smith@techinnovations.com'],
            [
                'name' => 'John Smith',
                'subject' => 'Full Stack Project Collaboration',
                'message' => 'Hello Saharsha, I really like your portfolio and would love to discuss an upcoming Laravel & React project with you.',
                'ip_address' => '127.0.0.1',
                'is_read' => false,
            ]
        );
    }
}
