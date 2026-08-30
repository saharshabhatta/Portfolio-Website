import { Head } from '@inertiajs/react';
import { BriefcaseBusiness, Code2, ArrowUpRight } from 'lucide-react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';

const EXPERIENCE = [
    {
        period: 'Oct 2025 — Present',
        role: 'Software Developer',
        company: 'Professional Experience',
        skills: ['Laravel', 'React', 'TypeScript', 'REST APIs'],
        description:
            'Working on modern web applications across frontend and backend development, building maintainable features, APIs, reusable interfaces, and practical solutions using relational databases and contemporary frameworks.',
        icon: Code2,
    },
    {
        period: 'Jun 2025 — Sep 2025',
        role: 'Software Developer Intern',
        company: 'Internship Experience',
        skills: ['Full Stack', 'Git Flow', 'Testing', 'Clean Code'],
        description:
            'Gained hands-on software development experience by contributing to real-world projects, implementing features, fixing issues, working with existing codebases, and collaborating within an agile development workflow.',
        icon: BriefcaseBusiness,
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative w-full overflow-hidden bg-[#f8f9fa] py-28 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white"
        >
            {/* Ambient background glow & radial patterns */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-indigo-500/15" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-teal-500/10" />

            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                {/* Section header tag */}
                <div className="mb-20 flex items-center gap-4">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        04
                    </span>
                    <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Career Experience
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Sticky Left Column */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 space-y-8">
                            <div>
                                <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                                    Growing through{' '}
                                    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                        every build.
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-md text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                    Moving from core foundation to taking direct ownership of features, microservices architecture, and production engineering.
                                </p>
                            </div>

                            {/* Stat cards grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                                        2025
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Career Started
                                    </span>
                                </div>
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                                        Full-Stack
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Core Focus
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Timeline Cards Column */}
                    <div className="lg:col-span-7">
                        <div className="relative border-l border-slate-200 pl-6 md:pl-10 dark:border-slate-800 space-y-8">
                            {EXPERIENCE.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={`${item.role}-${item.period}`}
                                        className="group relative rounded-2xl border border-slate-200/80 bg-white/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:bg-slate-900/80"
                                    >
                                        {/* Timeline node marker */}
                                        <div className="absolute -left-[31px] md:-left-[47px] top-8 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-400 transition-colors group-hover:bg-blue-600 dark:border-[#0d0f17] dark:bg-slate-600 dark:group-hover:bg-blue-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-slate-900" />
                                        </div>

                                        {/* Top Meta Bar */}
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <span className="font-mono text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                                {item.period}
                                            </span>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800/80 dark:text-slate-300 dark:group-hover:bg-blue-950/50 dark:group-hover:text-blue-400">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        </div>

                                        {/* Role Header */}
                                        <div className="mt-4">
                                            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                                {item.company}
                                            </p>
                                            <h2 className="mt-1 flex items-center justify-between text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                                {item.role}
                                            </h2>
                                        </div>

                                        {/* Main Description */}
                                        <p className="mt-4 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                                            {item.description}
                                        </p>

                                        {/* Skill Tags */}
                                        {item.skills && (
                                            <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                                {item.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-600 dark:bg-slate-800/60 dark:text-slate-400"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
