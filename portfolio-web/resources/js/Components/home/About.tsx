const TECH_STACK = [
    'Laravel',
    'PHP',
    'React',
    'TypeScript',
    'JavaScript',
    'MySQL',
    'Tailwind CSS',
    'REST API',
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-[#f4f2ed] py-24 text-[#22242f] transition-colors duration-500 dark:bg-[#22242f] dark:text-white"
        >
            <div className="pointer-events-none absolute -right-[350px] top-[80px] h-[700px] w-[700px] rounded-full border border-slate-300/60 dark:border-slate-600/20" />

            <div className="pointer-events-none absolute -right-[470px] -top-[40px] h-[950px] w-[950px] rounded-full border border-slate-300/40 dark:border-slate-600/10" />

            <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14 xl:px-16">
                <div className="mb-16 flex items-center gap-5 md:mb-24">
                    <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-slate-500">
                        01
                    </span>

                    <div className="h-px w-16 bg-slate-300 dark:bg-slate-700" />

                    <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
                        About Me
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <div className="sticky top-[150px]">
                            <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.25em] text-slate-500">
                                Who I Am
                            </p>

                            <h2 className="max-w-[560px] font-serif text-[52px] leading-[1.02] tracking-[-0.04em] text-[#22242f] sm:text-[64px] lg:text-[72px] dark:text-[#f7f7f8]">
                                I build ideas into
                                <span className="block text-slate-500 dark:text-slate-400">
                                    digital products.
                                </span>
                            </h2>

                            <div className="mt-12 h-px w-full max-w-[420px] bg-slate-300 dark:bg-slate-700/60" />

                            <div className="mt-10 flex items-center gap-6">
                                <div>
                                    <span className="block font-serif text-[42px] leading-none text-slate-900 dark:text-white">
                                        Full
                                    </span>

                                    <span className="mt-2 block text-sm text-slate-600 dark:text-slate-500">
                                        Stack Development
                                    </span>
                                </div>

                                <div className="h-16 w-px bg-slate-300 dark:bg-slate-700" />

                                <div>
                                    <span className="block font-serif text-[42px] leading-none text-slate-900 dark:text-white">
                                        Web
                                    </span>

                                    <span className="mt-2 block text-sm text-slate-600 dark:text-slate-500">
                                        Application Focus
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:pl-10">
                        <div className="max-w-[760px]">
                            <p className="text-[22px] font-light leading-[1.75] text-slate-700 md:text-[25px] dark:text-slate-300">
                                I&apos;m{' '}
                                <span className="font-medium text-slate-900 dark:text-white">
                                    Saharsha Bhatta
                                </span>
                                , a Full Stack Developer focused on building
                                modern web applications using{' '}
                                <span className="font-medium text-slate-900 dark:text-white">Laravel</span> and{' '}
                                <span className="font-medium text-slate-900 dark:text-white">React</span>.
                            </p>

                            <p className="mt-8 text-[17px] font-light leading-[1.8] text-slate-600 md:text-[19px] dark:text-slate-400">
                                I enjoy working across both frontend and backend
                                development — from designing clean user
                                interfaces and reusable React components to
                                developing APIs, database structures and
                                application logic with Laravel.
                            </p>

                            <p className="mt-6 text-[17px] font-light leading-[1.8] text-slate-600 md:text-[19px] dark:text-slate-400">
                                My goal is simple: build software that is clean,
                                practical, maintainable and genuinely useful to
                                the people using it.
                            </p>

                            <div className="mt-14">
                                <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.3em] text-slate-500">
                                    Technologies I Work With
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {TECH_STACK.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-[14px] text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:shadow-none dark:hover:border-slate-400 dark:hover:bg-white dark:hover:text-[#22242f]"
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
