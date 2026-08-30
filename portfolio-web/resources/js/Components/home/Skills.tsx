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
        icon: <Server className="h-5 w-5" />,
        skills: [
            {
                name: 'Laravel',
                description:
                    'Application architecture, APIs, and backend development.',
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
        icon: <Code2 className="h-5 w-5" />,
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
        icon: <Database className="h-5 w-5" />,
        skills: [
            {
                name: 'MySQL',
                description:
                    'Relational database design and querying.',
            },
            {
                name: 'Eloquent ORM',
                description:
                    'Models, relationships, and application data access.',
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
        icon: <GitBranch className="h-5 w-5" />,
        skills: [
            {
                name: 'Git',
                description:
                    'Version control, branching, and collaborative development.',
            },
            {
                name: 'Inertia.js',
                description:
                    'Connecting Laravel applications with React interfaces seamlessly.',
            },
            {
                name: 'Vite',
                description:
                    'Modern frontend tooling and fast development workflow.',
            },
        ],
    },
];

function useInView() {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.12 },
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
                group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/60 p-7 shadow-sm backdrop-blur-md transition-all duration-700 md:p-9 dark:border-slate-800/80 dark:bg-slate-900/40 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md dark:hover:border-slate-700 dark:hover:bg-slate-900/80
                ${
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
            }
            `}
            style={{
                transitionDelay: `${150 + index * 120}ms`,
            }}
        >
            <div>
                {/* Header Section */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950/50 dark:group-hover:text-blue-400">
                        {category.icon}
                    </div>

                    <span className="font-mono text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500">
                        {category.number}
                    </span>
                </div>

                <span className="block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {category.subtitle}
                </span>

                <h3 className="mt-1 font-sans text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {category.title}
                </h3>

                {/* Skills List */}
                <div className="mt-8 space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group/skill">
                            <div className="flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 transition-all duration-300 group-hover/skill:scale-125 dark:bg-blue-400" />
                                <h4 className="text-sm font-semibold text-slate-800 transition-colors group-hover/skill:text-blue-600 dark:text-slate-200 dark:group-hover/skill:text-blue-400">
                                    {skill.name}
                                </h4>
                            </div>

                            <p className="ml-4 mt-1 text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                {skill.description}
                            </p>

                            {skillIndex !== category.skills.length - 1 && (
                                <div className="mt-5 h-px bg-slate-100 dark:bg-slate-800/60" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const [sectionRef, inView] = useInView();

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative w-full overflow-hidden bg-[#f8f9fa] py-28 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white"
        >
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-indigo-500/15" />
            <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                {/* Section Header Tag */}
                <div className="mb-20 flex items-center gap-4">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        02
                    </span>
                    <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Skills & Expertise
                    </span>
                </div>

                {/* Section Title & Description */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-7">
                        <h2 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                            Tools I use to turn{' '}
                            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                ideas into software.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end lg:col-span-5">
                        <p className="max-w-md text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                            I work across the full development cycle, from backend architecture and database design to responsive React interfaces and production-ready web applications.
                        </p>
                    </div>
                </div>

                {/* Skill Cards Grid */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                            visible={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
