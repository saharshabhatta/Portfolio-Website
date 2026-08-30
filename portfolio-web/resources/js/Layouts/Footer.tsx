import { Link } from '@inertiajs/react';
import {
    ArrowUp,
    ArrowUpRight,
    MapPin,
} from 'lucide-react';

const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        href: 'https://github.com',
        handle: '@saharsha',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        handle: 'Saharsha Bhatta',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        handle: '@saharsha',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full overflow-hidden bg-[#f8f9fa] pt-20 pb-12 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-blue-500/10" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                {/* Upper Call-To-Action Banner */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-md backdrop-blur-md md:p-12 dark:border-slate-800/80 dark:bg-slate-900/50">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-3">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                    Available for new opportunities
                                </span>
                            </div>

                            <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                                Let’s build something{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                    extraordinary together.
                                </span>
                            </h2>
                        </div>

                        <div className="flex items-center lg:col-span-4 lg:justify-end">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400 dark:hover:text-slate-950"
                            >
                                <span>Start a Conversation</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="mt-16 grid grid-cols-1 gap-12 pt-12 border-t border-slate-200/80 md:grid-cols-12 dark:border-slate-800/80">
                    {/* Brand Info */}
                    <div className="space-y-4 md:col-span-5">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:group-hover:bg-blue-400">
                                <span className="font-mono text-lg font-bold">S</span>
                            </div>
                            <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                Saharsha Bhatta
                            </span>
                        </Link>

                        <p className="max-w-sm font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Full-Stack Software Developer focused on crafting performant web platforms, modern interfaces, and scalable applications.
                        </p>

                        <div className="flex items-center gap-2 pt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>Kathmandu, Nepal</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                            Navigation
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect & Socials */}
                    <div className="md:col-span-4">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                            Connect
                        </h3>

                        <div className="mt-4 flex flex-col gap-3">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900/30 dark:hover:border-slate-700 dark:hover:bg-slate-900/70"
                                    >
                                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <Icon className="h-4 w-4 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                            <span>{social.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1 font-mono text-slate-400">
                                            <span>{social.handle}</span>
                                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar & Copyright */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200/80 pt-8 sm:flex-row dark:border-slate-800/80">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                        <span>© {new Date().getFullYear()} Saharsha Bhatta. All rights reserved.</span>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                    >
                        <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
