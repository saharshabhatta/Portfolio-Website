import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowUpRight,
    Code2,
    Layers3,
    Smartphone,
    Sparkles,
    CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '@/Components/svg/GithubIcon';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { Project, ProfileSetting } from '@/types';

const DEFAULT_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Portfolio Platform',
        slug: 'portfolio-platform',
        type: 'Personal Project',
        description:
            'A responsive portfolio platform designed to present projects, experience, certificates, and technical skills through a clean and consistent interface.',
        stack: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'],
        icon: 'Layers3',
        link: '#',
        image: '/images/projects/portfolio-preview.jpg',
        highlights: ['Dynamic Content Delivery', 'Dark/Light Theme Support', 'Modular UI Architecture'],
        order: 1,
        is_featured: true,
        is_published: true,
    },
    {
        id: 2,
        title: 'Business Dashboard',
        slug: 'business-dashboard',
        type: 'Web Application',
        description:
            'A practical business dashboard built around clear data presentation, reusable interfaces, backend integrations, and efficient user workflows.',
        stack: ['Laravel', 'Inertia', 'MySQL', 'React'],
        icon: 'Code2',
        link: '#',
        image: '/images/projects/dashboard-preview.jpg',
        highlights: ['RESTful API Integration', 'Role-based Access', 'Real-time Analytics View'],
        order: 2,
        is_featured: true,
        is_published: true,
    },
    {
        id: 3,
        title: 'Mobile-first Commerce',
        slug: 'mobile-first-commerce',
        type: 'Frontend Experience',
        description:
            'A responsive commerce interface focused on product discovery, clean interactions, mobile usability, and fast frontend performance.',
        stack: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
        icon: 'Smartphone',
        link: '#',
        image: '/images/projects/commerce-preview.jpg',
        highlights: ['Optimized Core Web Vitals', 'Sub-second Page Loads', 'Touch-friendly Navigation'],
        order: 3,
        is_featured: true,
        is_published: true,
    },
];

function getProjectIcon(iconName?: string) {
    const icon = iconName?.toLowerCase() || '';
    if (icon.includes('code')) return Code2;
    if (icon.includes('smart') || icon.includes('phone') || icon.includes('mobile')) return Smartphone;
    return Layers3;
}

export default function Projects({
    projects,
    profile,
}: {
    projects?: Project[];
    profile?: ProfileSetting;
}) {
    const page = usePage();
    const isStandalonePage = page.component === 'Projects';

    const projectList = projects && projects.length > 0 ? projects : DEFAULT_PROJECTS;
    const [activeProject, setActiveProject] = useState<number>(0);

    const currentProject = projectList[activeProject] || projectList[0];
    const IconComponent = getProjectIcon(currentProject?.icon);

    const content = (
        <section
            id="projects"
            className={`relative w-full overflow-hidden bg-[#f8f9fa] text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white ${
                isStandalonePage ? 'pt-32 pb-28' : 'py-28'
            }`}
        >
            {isStandalonePage && <Head title="Projects Showcase — Saharsha Bhatta" />}

            {/* Ambient background glow & radial patterns */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-blue-500/15" />
            <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            <div className="relative mx-auto w-full max-w-[1300px] px-6 md:px-10 lg:px-12">
                {/* Section Header Tag */}
                <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        03
                    </span>
                    <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Selected Work
                    </span>
                </div>

                {/* Main Section Heading & Stats Bar */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                            Projects built{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                with purpose.
                            </span>
                        </h1>
                        <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                            I enjoy building applications that solve practical problems while keeping the code structure, interface, and user experience simple and maintainable.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 rounded-xl border border-slate-300/80 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-slate-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800/80"
                    >
                        <span>Have a project in mind?</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400" />
                    </Link>
                </div>

                {/* Unique Interactive Work Index Bar */}
                <div className="mt-14 flex items-center gap-2 overflow-x-auto border-b border-slate-200/80 pb-4 no-scrollbar dark:border-slate-800/80">
                    {projectList.map((project, index) => {
                        const Icon = getProjectIcon(project.icon);
                        const isActive = activeProject === index;

                        return (
                            <button
                                key={project.id || project.title}
                                onClick={() => setActiveProject(index)}
                                type="button"
                                className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900'
                                        : 'bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <Icon className={`h-4 w-4 ${isActive ? 'text-blue-400 dark:text-blue-600' : 'text-slate-400'}`} />
                                <span className="whitespace-nowrap">{project.title}</span>
                                <span className={`font-mono text-xs opacity-60 ${isActive ? 'text-white dark:text-slate-900' : ''}`}>
                                    0{index + 1}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Featured Project Showcase Display */}
                {currentProject && (
                    <div className="mt-12">
                        <div
                            key={currentProject.id || currentProject.title}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-lg backdrop-blur-md transition-all duration-500 md:p-12 dark:border-slate-800/80 dark:bg-slate-900/50"
                        >
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                                {/* Left Details Panel */}
                                <div className="flex flex-col justify-between lg:col-span-6">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                                                <IconComponent className="h-5 w-5" />
                                            </div>
                                            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                                PROJECT 0{activeProject + 1}
                                            </span>
                                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                {currentProject.type}
                                            </span>
                                        </div>

                                        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                            {currentProject.title}
                                        </h2>

                                        <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                                            {currentProject.description}
                                        </p>

                                        {/* Key Highlights */}
                                        {currentProject.highlights && currentProject.highlights.length > 0 && (
                                            <div className="mt-6 space-y-2">
                                                {currentProject.highlights.map((highlight, hIndex) => (
                                                    <div key={hIndex} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Stack Pills */}
                                        {currentProject.stack && currentProject.stack.length > 0 && (
                                            <div className="mt-8 flex flex-wrap gap-2">
                                                {currentProject.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-lg border border-slate-200/80 bg-slate-100/80 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Links */}
                                    <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-4">
                                        {currentProject.link && (
                                            <a
                                                href={currentProject.link}
                                                target={currentProject.link.startsWith('http') ? '_blank' : undefined}
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
                                            >
                                                <span>Explore Live Project</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        )}

                                        {currentProject.github_link && (
                                            <a
                                                href={currentProject.github_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                            >
                                                <GithubIcon className="h-4 w-4" />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right Interactive Image Framing */}
                                <div className="lg:col-span-6">
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-md transition-transform duration-700 group-hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-800/80">
                                        {currentProject.image ? (
                                            <img
                                                src={currentProject.image}
                                                alt={`${currentProject.title} preview`}
                                                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                onError={(e) => {
                                                    (e.target as HTMLElement).style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600">
                                                <Sparkles className="h-10 w-10 text-slate-300 dark:text-slate-700" />
                                                <span className="text-xs font-semibold uppercase tracking-widest">
                                                    {currentProject.title} Preview
                                                </span>
                                            </div>
                                        )}

                                        {/* Floating Spec Overlay */}
                                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/80 p-3.5 shadow-lg backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/80">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                                    </span>
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                                        Production Ready
                                                    </span>
                                                </div>
                                                <span className="font-mono text-xs text-slate-400">
                                                    {currentProject.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Secondary Grid (Compact View for Additional Projects) */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {projectList.map((project, index) => {
                        const Icon = getProjectIcon(project.icon);

                        return (
                            <div
                                key={project.id || project.title}
                                onClick={() => setActiveProject(index)}
                                className={`cursor-pointer rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${
                                    activeProject === index
                                        ? 'border-blue-500 bg-white shadow-md dark:border-blue-500 dark:bg-slate-900'
                                        : 'border-slate-200/80 bg-white/40 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900/30 dark:hover:bg-slate-900/60'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-mono text-xs font-semibold text-slate-400">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs font-normal text-slate-600 dark:text-slate-400">
                                    {project.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

    if (isStandalonePage) {
        return <PortfolioLayout>{content}</PortfolioLayout>;
    }

    return content;
}
