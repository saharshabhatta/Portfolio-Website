import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    UserCircle,
    FolderGit2,
    Briefcase,
    Award,
    Sparkles,
    Mail,
    ExternalLink,
    LogOut,
    Menu,
    X,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    ArrowUpRight,
    Shield,
    Layers,
} from 'lucide-react';
import { PageProps } from '@/types';
import ThemeToggle from '@/Components/ThemeToggle';

interface AdminLayoutProps {
    header?: ReactNode;
    title?: string;
    subtitle?: string;
    actions?: ReactNode;
}

export default function AdminLayout({
    title,
    subtitle,
    actions,
    children,
}: PropsWithChildren<AdminLayoutProps>) {
    const { auth, flash, unreadMessagesCount } = usePage<PageProps>().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Track flash messages
    useEffect(() => {
        if (flash?.success) {
            setToastMessage({ type: 'success', text: flash.success });
            const timer = setTimeout(() => setToastMessage(null), 4000);
            return () => clearTimeout(timer);
        } else if (flash?.error) {
            setToastMessage({ type: 'error', text: flash.error });
            const timer = setTimeout(() => setToastMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const navItems = [
        {
            label: 'Dashboard',
            href: '/admin/dashboard',
            icon: LayoutDashboard,
            active: route().current('admin.dashboard') || route().current('dashboard') || route().current('admin.index'),
        },
        {
            label: 'Profile & Hero',
            href: '/admin/profile',
            icon: UserCircle,
            active: route().current('admin.profile.*'),
        },
        {
            label: 'Projects',
            href: '/admin/projects',
            icon: FolderGit2,
            active: route().current('admin.projects.*'),
        },
        {
            label: 'Experience',
            href: '/admin/experience',
            icon: Briefcase,
            active: route().current('admin.experience.*'),
        },
        {
            label: 'Certificates',
            href: '/admin/certificates',
            icon: Award,
            active: route().current('admin.certificates.*'),
        },
        {
            label: 'Skills',
            href: '/admin/skills',
            icon: Sparkles,
            active: route().current('admin.skills.*'),
        },
        {
            label: 'Messages',
            href: '/admin/messages',
            icon: Mail,
            active: route().current('admin.messages.*'),
            badge: unreadMessagesCount && unreadMessagesCount > 0 ? unreadMessagesCount : undefined,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-[#090b11] dark:text-slate-100">
            <Head title={title ? `${title} — Admin Panel` : 'Admin Panel'} />

            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex max-w-md items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 animate-in fade-in slide-in-from-bottom-5">
                    {toastMessage.type === 'success' ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    ) : (
                        <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
                    )}
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {toastMessage.text}
                    </p>
                    <button
                        onClick={() => setToastMessage(null)}
                        className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200/80 bg-white/95 shadow-xl backdrop-blur-xl transition-transform duration-300 ease-in-out lg:translate-x-0 dark:border-slate-800/80 dark:bg-[#0e111a]/95 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Brand / Logo */}
                <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800/60">
                    <Link href="/admin/dashboard" className="flex items-center gap-3 group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                            <Layers className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="block text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Portfolio CMS
                            </span>
                            <span className="block text-[11px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                Management Suite
                            </span>
                        </div>
                    </Link>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 lg:hidden dark:text-slate-400 dark:hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
                    <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        Content Management
                    </div>

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                                    item.active
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon
                                        className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                                            item.active
                                                ? 'text-white'
                                                : 'text-slate-400 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-white'
                                        }`}
                                    />
                                    <span>{item.label}</span>
                                </div>

                                {item.badge && (
                                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white shadow-sm animate-pulse">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}

                    <div className="pt-6 px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        Public Site & Links
                    </div>

                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <ExternalLink className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                            <span>View Live Website</span>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                {/* User Info & Logout Footer */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 p-3 dark:bg-slate-800/50">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold dark:bg-blue-900/50 dark:text-blue-300">
                                {auth.user?.name?.charAt(0) || 'A'}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-xs font-semibold text-slate-900 dark:text-white">
                                    {auth.user?.name || 'Administrator'}
                                </p>
                                <p className="truncate text-[11px] text-slate-500 dark:text-slate-400">
                                    {auth.user?.email || 'admin@portfolio.test'}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="p-2 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            title="Sign out"
                        >
                            <LogOut className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <div className="lg:pl-72 flex flex-col min-h-screen">
                {/* Header Topbar */}
                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#090b11]/80">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 text-slate-600 hover:text-slate-900 lg:hidden dark:text-slate-400 dark:hover:text-white"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                {title || 'Dashboard'}
                            </h1>
                            {subtitle && (
                                <p className="text-xs font-normal text-slate-500 dark:text-slate-400">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800/80"
                        >
                            <span>Live Site</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                        {actions}
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-8 lg:p-10 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
