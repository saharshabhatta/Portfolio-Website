import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Menu, X, LayoutDashboard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PageProps } from '@/types';

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
    const { url, props } = usePage<PageProps>();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const siteProfile = props.siteProfile;
    const authUser = props.auth?.user;
    const isAvailable = siteProfile?.is_available_for_hire ?? true;
    const nameInitial = siteProfile?.title_prefix?.charAt(0) || 'S';
    const brandName = siteProfile?.title_prefix || 'Saharsha';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper to match path accurately for root vs routes
    const isActiveRoute = (path: string) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? 'py-4 bg-[#f8f9fa]/80 shadow-sm backdrop-blur-xl dark:bg-[#0d0f17]/80 dark:shadow-slate-950/40 border-b border-slate-200/50 dark:border-slate-800/50'
                    : 'py-6 bg-transparent'
            }`}
        >
            <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-12">
                {/* Brand Logo */}
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-3.5 focus:outline-none"
                >
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:group-hover:bg-blue-400">
                        <span className="font-mono text-lg font-bold tracking-tighter">
                            {nameInitial}
                        </span>
                        {isAvailable && (
                            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                            {brandName}
                        </span>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Developer
                        </span>
                    </div>
                </Link>

                {/* Desktop Central Glass Floating Navigation */}
                <div className="hidden items-center rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60 lg:flex">
                    <ul className="flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const active = isActiveRoute(item.href);

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                                            active
                                                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                                                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Desktop Action CTA & Admin Buttons */}
                <div className="hidden items-center gap-3 lg:flex">
                    {authUser && (
                        <Link
                            href="/admin/dashboard"
                            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2.5 text-xs font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-900/60"
                        >
                            <LayoutDashboard className="h-3.5 w-3.5" />
                            <span>Admin CMS</span>
                        </Link>
                    )}

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-md dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400 dark:hover:text-slate-950"
                    >
                        <span>Hire Me</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition-all hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800 lg:hidden"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {/* Mobile Navigation Drawer Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                    isOpen
                        ? 'max-h-[550px] border-b border-slate-200/80 bg-white/95 opacity-100 backdrop-blur-2xl shadow-lg dark:border-slate-800/80 dark:bg-[#0d0f17]/95'
                        : 'pointer-events-none max-h-0 opacity-0'
                }`}
            >
                <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-6 space-y-3">
                    {NAV_ITEMS.map((item, index) => {
                        const active = isActiveRoute(item.href);

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all ${
                                    active
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900/80 dark:hover:text-white'
                                }`}
                            >
                                <span>{item.label}</span>
                                <span className="font-mono text-xs opacity-50">
                                    0{index + 1}
                                </span>
                            </Link>
                        );
                    })}

                    {authUser && (
                        <Link
                            href="/admin/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-2xl bg-blue-50 px-5 py-3.5 text-sm font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
                        >
                            <div className="flex items-center gap-2">
                                <LayoutDashboard className="h-4 w-4" />
                                <span>Admin Panel</span>
                            </div>
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    )}

                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            <span>Hire Me</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
