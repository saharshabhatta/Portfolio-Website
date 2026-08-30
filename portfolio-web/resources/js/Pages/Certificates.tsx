import { Head } from '@inertiajs/react';
import {
    Award,
    BadgeCheck,
    ExternalLink,
} from 'lucide-react';

import PortfolioLayout from '@/Layouts/PortfolioLayout';

interface Certificate {
    title: string;
    issuer: string;
    year: string;
    focus: string;
    link: string;
    image?: string;
}

const CERTIFICATES: Certificate[] = [
    {
        title: 'Laravel Development',
        issuer: 'Professional Learning',
        year: '2025',
        focus: 'Application architecture, REST APIs, database design, and modern PHP development practices.',
        link: '#',
        image: '/images/certificates/laravel-cert.jpg', // Replace with your image path
    },
    {
        title: 'React & TypeScript',
        issuer: 'Professional Learning',
        year: '2025',
        focus: 'Component-driven interfaces, reusable frontend architecture, and type-safe application development.',
        link: '#',
        image: '/images/certificates/react-cert.jpg', // Replace with your image path
    },
    {
        title: 'Responsive Web Design',
        issuer: 'Professional Learning',
        year: '2024',
        focus: 'Responsive layouts, accessible interfaces, and adaptable user experiences across different devices.',
        link: '#',
        image: '/images/certificates/web-design-cert.jpg', // Replace with your image path
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="relative w-full overflow-hidden bg-[#f8f9fa] py-28 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white"
        >
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
                <div className="mt-12 grid grid-cols-2 gap-6 border-y border-slate-200/80 py-8 sm:grid-cols-4 dark:border-slate-800/80">
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            0{CERTIFICATES.length}
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
                            Learning Since
                        </span>
                    </div>
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            100%
                        </span>
                        <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Verified Badges
                        </span>
                    </div>
                    <div>
                        <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                            Active
                        </span>
                        <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Status
                        </span>
                    </div>
                </div>

                {/* Certificate List (Top-to-Bottom Flow) */}
                <div className="mt-16 space-y-12">
                    {CERTIFICATES.map((certificate, index) => (
                        <article
                            key={certificate.title}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white hover:shadow-xl md:p-8 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-blue-500/30 dark:hover:bg-slate-900/80"
                        >
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                                {/* Certificate Photo Preview */}
                                <div className="lg:col-span-5">
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-inner dark:border-slate-800 dark:bg-slate-800/60">
                                        {certificate.image ? (
                                            <img
                                                src={certificate.image}
                                                alt={`${certificate.title} certificate`}
                                                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600">
                                                <Award className="h-10 w-10" />
                                                <span className="text-xs font-medium uppercase tracking-wider">
                                                    Certificate Photo
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Certificate Information */}
                                <div className="flex flex-col justify-between lg:col-span-7">
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                                CERT {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                {certificate.year}
                                            </span>
                                        </div>

                                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 md:text-3xl dark:text-white dark:group-hover:text-blue-400">
                                            {certificate.title}
                                        </h2>

                                        <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                            {certificate.issuer}
                                        </span>

                                        <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                                            {certificate.focus}
                                        </p>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800/80">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                            <BadgeCheck className="h-4 w-4" />
                                            Verified Credential
                                        </div>

                                        {certificate.link && (
                                            <a
                                                href={certificate.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`View ${certificate.title} certificate`}
                                                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 dark:bg-slate-800 dark:text-white dark:hover:bg-blue-500"
                                            >
                                                <span>View Credential</span>
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
