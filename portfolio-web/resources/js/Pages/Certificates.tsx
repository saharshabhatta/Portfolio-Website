import { Head, usePage } from '@inertiajs/react';
import {
    Award,
    BadgeCheck,
    ExternalLink,
} from 'lucide-react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { Certificate as CertificateType, ProfileSetting } from '@/types';

const DEFAULT_CERTIFICATES: CertificateType[] = [
    {
        id: 1,
        title: 'Laravel Development',
        issuer: 'Professional Learning',
        year: '2025',
        focus: 'Application architecture, REST APIs, database design, and modern PHP development practices.',
        link: '#',
        image: '/images/certificates/laravel-cert.jpg',
        order: 1,
        is_published: true,
    },
    {
        id: 2,
        title: 'React & TypeScript',
        issuer: 'Professional Learning',
        year: '2025',
        focus: 'Component-driven interfaces, reusable frontend architecture, and type-safe application development.',
        link: '#',
        image: '/images/certificates/react-cert.jpg',
        order: 2,
        is_published: true,
    },
    {
        id: 3,
        title: 'Responsive Web Design',
        issuer: 'Professional Learning',
        year: '2024',
        focus: 'Responsive layouts, accessible interfaces, and adaptable user experiences across different devices.',
        link: '#',
        image: '/images/certificates/web-design-cert.jpg',
        order: 3,
        is_published: true,
    },
];

export default function Certificates({
    certificates,
    profile,
}: {
    certificates?: CertificateType[];
    profile?: ProfileSetting;
}) {
    const page = usePage();
    const isStandalonePage = page.component === 'Certificates';

    const certList =
        certificates && certificates.length > 0
            ? certificates
            : DEFAULT_CERTIFICATES;

    const content = (
        <section
            id="certificates"
            className={`relative w-full overflow-hidden bg-[#f8f9fa] text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white ${
                isStandalonePage ? 'pt-32 pb-28' : 'py-28'
            }`}
        >
            {isStandalonePage && <Head title="Certificates — Saharsha Bhatta" />}

            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-indigo-500/15" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-teal-500/10" />

            <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-12">
                {/* Section Header */}
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-4 flex items-center gap-4">
                            <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                                05
                            </span>
                            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                                Certificates
                            </span>
                        </div>
                        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                            Always learning.{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                Always improving.
                            </span>
                        </h1>
                    </div>

                    <p className="max-w-md text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                        Certificates representing modern frameworks, robust concepts, and engineering practices I explore continuously.
                    </p>
                </div>

                {/* Top Metrics Banner */}
                <div className="mt-12 grid grid-cols-2 gap-6 border-y border-slate-200/80 py-8 sm:grid-cols-3 dark:border-slate-800/80">
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            0{certList.length}
                        </span>
                        <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Total Certifications
                        </span>
                    </div>
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            2024
                        </span>
                        <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Continuous Learning
                        </span>
                    </div>
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            100%
                        </span>
                        <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Verified Skills
                        </span>
                    </div>
                </div>

                {/* Certificates Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {certList.map((cert) => (
                        <div
                            key={cert.id || cert.title}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:bg-slate-900/80"
                        >
                            <div>
                                {/* Certificate Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950/50 dark:group-hover:text-blue-400">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 font-mono text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300">
                                        {cert.year}
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                        {cert.issuer}
                                    </span>
                                    <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                        {cert.title}
                                    </h3>
                                    <p className="mt-3 text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                        {cert.focus}
                                    </p>
                                </div>
                            </div>

                            {cert.link && cert.link !== '#' && (
                                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                                    >
                                        <span>Verify Credential</span>
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    if (isStandalonePage) {
        return <PortfolioLayout>{content}</PortfolioLayout>;
    }

    return content;
}
