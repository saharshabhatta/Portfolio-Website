import { ProfileSetting } from '@/types';

const DEFAULT_TECH_STACK = [
    'Laravel',
    'PHP',
    'React',
    'TypeScript',
    'JavaScript',
    'MySQL',
    'Tailwind CSS',
    'REST API',
];

export default function About({ profile }: { profile?: ProfileSetting }) {
    const heading = profile?.about_heading || 'I build ideas into digital products.';
    const intro = profile?.about_intro || (
        <>
            I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:from-blue-400 dark:to-indigo-300">
                {profile?.full_name || 'Saharsha Bhatta'}
            </span>
            , a Full Stack Developer focused on building modern web applications using{' '}
            <span className="font-semibold text-slate-900 dark:text-white">Laravel</span> and{' '}
            <span className="font-semibold text-slate-900 dark:text-white">React</span>.
        </>
    );

    const description = profile?.about_description || (
        <>
            <p>
                I enjoy working across both frontend and backend development — from designing clean user interfaces and reusable React components to developing APIs, database structures, and robust application logic with Laravel.
            </p>
            <p>
                My goal is simple: build software that is clean, practical, maintainable, and genuinely useful to the people using it.
            </p>
        </>
    );

    const techStack = profile?.tech_stack_tags && profile.tech_stack_tags.length > 0
        ? profile.tech_stack_tags
        : DEFAULT_TECH_STACK;

    const badge1Value = profile?.experience_badge_value || 'Full';
    const badge1Label = profile?.experience_badge_label || 'Stack Development';
    const badge2Value = profile?.focus_badge_value || 'Web';
    const badge2Label = profile?.focus_badge_label || 'Application Focus';

    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-[#f8f9fa] py-28 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white"
        >
            {/* Ambient background glow & radial patterns */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-indigo-500/15" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                {/* Section header tag */}
                <div className="mb-20 flex items-center gap-4">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        01
                    </span>
                    <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        About Me
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 space-y-8">
                            <div>
                                <h2 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                                    {heading.split(' ').slice(0, 3).join(' ')}{' '}
                                    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                        {heading.split(' ').slice(3).join(' ') || 'digital products.'}
                                    </span>
                                </h2>
                            </div>

                            {/* Stat cards grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                                        {badge1Value}
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        {badge1Label}
                                    </span>
                                </div>
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                                        {badge2Value}
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        {badge2Label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Main Column */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-7 shadow-sm backdrop-blur-md transition-all md:p-10 dark:border-slate-800/80 dark:bg-slate-900/40">
                            <p className="text-xl font-medium leading-relaxed text-slate-800 md:text-2xl dark:text-slate-200">
                                {typeof intro === 'string' ? intro : intro}
                            </p>

                            <div className="mt-6 space-y-4 text-sm font-normal leading-relaxed text-slate-600 md:text-base dark:text-slate-300 whitespace-pre-wrap">
                                {typeof description === 'string' ? description : description}
                            </div>

                            {/* Tech Stack Container */}
                            <div className="mt-10 border-t border-slate-100 pt-8 dark:border-slate-800/60">
                                <span className="block text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                                    Technologies I Work With
                                </span>

                                <div className="flex flex-wrap gap-2.5">
                                    {techStack.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2 font-mono text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
