import { Link, usePage } from '@inertiajs/react';
import {
    ArrowUp,
    ArrowUpRight,
    MapPin,
    Globe,
} from 'lucide-react';
import { PageProps } from '@/types';
import { FacebookIcon } from '@/Components/svg/FacebookIcon';
import { DribbbleIcon } from '@/Components/svg/DribbbleIcon';
import { LinkedinIcon } from '@/Components/svg/LinkedinIcon';
import { GithubIcon } from '@/Components/svg/GithubIcon';
import { InstagramIcon } from '@/Components/svg/InstagramIcon';

const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact', href: '/contact' },
];

function getSocialIcon(platform: string) {
    const p = platform.toLowerCase();
    if (p.includes('facebook')) return FacebookIcon;
    if (p.includes('dribbble')) return DribbbleIcon;
    if (p.includes('linkedin')) return LinkedinIcon;
    if (p.includes('github')) return GithubIcon;
    if (p.includes('instagram')) return InstagramIcon;
    return Globe;
}

export default function Footer() {
    const { props } = usePage<PageProps>();
    const siteProfile = props.siteProfile;

    const fullName = siteProfile?.full_name || 'Saharsha Bhatta';
    const headline = siteProfile?.headline || 'Full-Stack Software Developer focused on crafting performant web platforms, modern interfaces, and scalable applications.';
    const location = siteProfile?.location || 'Nepal · Available Remote';
    const isAvailable = siteProfile?.is_available_for_hire ?? true;
    const availabilityText = siteProfile?.availability_status || 'Available for new opportunities';

    const socialLinks = siteProfile?.social_links && siteProfile.social_links.length > 0
        ? siteProfile.social_links
        : [
            { platform: 'GitHub', url: 'https://github.com', handle: '@saharsha' },
            { platform: 'LinkedIn', url: 'https://linkedin.com', handle: 'Saharsha Bhatta' },
            { platform: 'Instagram', url: 'https://instagram.com', handle: '@saharsha' },
        ];

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
                                {isAvailable && (
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                )}
                                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                    {availabilityText}
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
                                <span className="font-mono text-lg font-bold">{fullName.charAt(0)}</span>
                            </div>
                            <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                {fullName}
                            </span>
                        </Link>

                        <p className="max-w-sm font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {headline}
                        </p>

                        <div className="flex items-center gap-2 pt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{location}</span>
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
                            {socialLinks.map((social) => {
                                const Icon = getSocialIcon(social.platform);

                                return (
                                    <a
                                        key={social.platform + social.url}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900/30 dark:hover:border-slate-700 dark:hover:bg-slate-900/70"
                                    >
                                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <Icon className="h-4 w-4 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                            <span>{social.platform}</span>
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
                        <span>© {new Date().getFullYear()} {fullName}. All rights reserved.</span>
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
