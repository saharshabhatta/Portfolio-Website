import {
    Braces,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Server,
    Sparkles,
} from 'lucide-react';
import {
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Skill {
    name: string;
    description: string;
}

interface SkillCategory {
    number: string;
    title: string;
    subtitle: string;
    icon: ReactNode;
    skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        number: '01',
        title: 'Backend',
        subtitle: 'Server & application logic',
        icon: <Server className="h-6 w-6" />,
        skills: [
            {
                name: 'Laravel',
                description:
                    'Application architecture, APIs and backend development.',
            },
            {
                name: 'PHP',
                description:
                    'Object-oriented development and server-side logic.',
            },
            {
                name: 'REST APIs',
                description:
                    'Designing and integrating maintainable APIs.',
            },
        ],
    },
    {
        number: '02',
        title: 'Frontend',
        subtitle: 'Interfaces & interaction',
        icon: <Code2 className="h-6 w-6" />,
        skills: [
            {
                name: 'React',
                description:
                    'Reusable components and interactive interfaces.',
            },
            {
                name: 'TypeScript',
                description:
                    'Type-safe and maintainable frontend applications.',
            },
            {
                name: 'Tailwind CSS',
                description:
                    'Responsive and consistent user interface styling.',
            },
        ],
    },
    {
        number: '03',
        title: 'Database',
        subtitle: 'Data & relationships',
        icon: <Database className="h-6 w-6" />,
        skills: [
            {
                name: 'MySQL',
                description:
                    'Relational database design and querying.',
            },
            {
                name: 'Eloquent ORM',
                description:
                    'Models, relationships and application data access.',
            },
            {
                name: 'Data Modelling',
                description:
                    'Structuring data around practical application requirements.',
            },
        ],
    },
    {
        number: '04',
        title: 'Development',
        subtitle: 'Workflow & tooling',
        icon: <GitBranch className="h-6 w-6" />,
        skills: [
            {
                name: 'Git',
                description:
                    'Version control, branching and collaborative development.',
            },
            {
                name: 'Inertia.js',
                description:
                    'Connecting Laravel applications with React interfaces.',
            },
            {
                name: 'Vite',
                description:
                    'Modern frontend tooling and development workflow.',
            },
        ],
    },
];

function useInView() {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return [ref, inView] as const;
}

function SkillCard({
                       category,
                       index,
                       visible,
                   }: {
    category: SkillCategory;
    index: number;
    visible: boolean;
}) {
    return (
        <div
            className={`
                group relative overflow-hidden
                border-b border-r border-slate-300/80 dark:border-slate-700/60
                p-7 md:p-9 lg:p-10
                transition-all duration-700 ease-out
                hover:bg-slate-900/[0.02] dark:hover:bg-white/[0.025]
                ${
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-16 opacity-0'
            }
            `}
            style={{
                transitionDelay: `${200 + index * 140}ms`,
            }}
        >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-slate-300/50 transition-all duration-700 group-hover:scale-125 group-hover:border-slate-400/60 dark:border-slate-700/40 dark:group-hover:border-slate-500/40" />

            <div className="relative z-10">
                <div className="mb-10 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-slate-900 group-hover:bg-[#22242f] group-hover:text-white dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:shadow-none dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-[#22242f]">
                        {category.icon}
                    </div>

                    <span className="font-mono text-[12px] tracking-[0.3em] text-slate-400 dark:text-slate-600">
                        {category.number}
                    </span>
                </div>

                <p className="mb-2 text-[12px] uppercase tracking-[0.25em] text-slate-500">
                    {category.subtitle}
                </p>

                <h3 className="font-serif text-[34px] tracking-[-0.03em] text-[#22242f] md:text-[40px] dark:text-white">
                    {category.title}
                </h3>

                <div className="mt-8 space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skill.name}
                            className="group/skill"
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/skill:scale-150 group-hover/skill:bg-slate-900 dark:bg-slate-500 dark:group-hover/skill:bg-white" />

                                <h4 className="text-[16px] font-medium text-slate-800 dark:text-slate-200">
                                    {skill.name}
                                </h4>
                            </div>

                            <p className="ml-[18px] mt-2 max-w-[320px] text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
                                {skill.description}
                            </p>

                            {skillIndex !==
                                category.skills.length - 1 && (
                                    <div className="ml-[18px] mt-6 h-px bg-slate-200 dark:bg-slate-700/40" />
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function FloatingBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-[420px] top-[80px] h-[850px] w-[850px] rounded-full border border-slate-300/40 motion-safe:animate-[skillOrbit_24s_linear_infinite] dark:border-slate-600/15" />

            <div className="absolute -left-[300px] top-[200px] h-[600px] w-[600px] rounded-full border border-slate-300/50 motion-safe:animate-[skillOrbitReverse_30s_linear_infinite] dark:border-slate-600/20" />

            <div className="absolute right-[8%] top-[15%] h-32 w-32 rounded-full bg-amber-500/[0.03] blur-2xl motion-safe:animate-[skillFloat_8s_ease-in-out_infinite] dark:bg-white/[0.015]" />

            <div className="absolute bottom-[10%] left-[45%] h-48 w-48 rounded-full bg-slate-500/[0.03] blur-3xl motion-safe:animate-[skillFloat_11s_ease-in-out_infinite_reverse] dark:bg-slate-300/[0.02]" />
        </div>
    );
}

export default function Skills() {
    const [sectionRef, inView] = useInView();

    return (
        <>
            <section
                ref={sectionRef}
                id="skills"
                className="relative w-full overflow-hidden bg-[#f4f2ed] text-[#22242f] transition-colors duration-500 dark:bg-[#22242f] dark:text-white lg:py-24"
            >
                <FloatingBackground />

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14 xl:px-16">
                    <div className="mb-16 flex items-center gap-5 md:mb-20">
                        <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-slate-500">
                            02
                        </span>

                        <div className="h-px w-16 bg-slate-300 dark:bg-slate-700" />

                        <span className="text-[13px] font-medium uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
                            Skills & Expertise
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <h2 className="max-w-[850px] font-serif text-[52px] leading-[1.02] tracking-[-0.04em] text-[#22242f] sm:text-[64px] lg:text-[78px] dark:text-[#f7f7f8]">
                                Tools I use to turn
                                <span className="block text-slate-500 dark:text-slate-400">
                                    ideas into software.
                                </span>
                            </h2>
                        </div>

                        <div className="flex items-end lg:col-span-5">
                            <p className="max-w-[500px] text-[17px] font-light leading-[1.8] text-slate-600 md:text-[19px] dark:text-slate-400">
                                I work across the full development
                                cycle, from backend architecture and
                                database design to responsive React
                                interfaces and production-ready web
                                applications.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 border-l border-t border-slate-300/80 md:grid-cols-2 dark:border-slate-700/60">
                        {SKILL_CATEGORIES.map(
                            (category, index) => (
                                <SkillCard
                                    key={category.title}
                                    category={category}
                                    index={index}
                                    visible={inView}
                                />
                            ),
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
