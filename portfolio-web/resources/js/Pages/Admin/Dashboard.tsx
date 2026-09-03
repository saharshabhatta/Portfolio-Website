import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import {
    FolderGit2,
    Briefcase,
    Award,
    Sparkles,
    Mail,
    ArrowUpRight,
    Plus,
    UserCircle,
    CheckCircle2,
    Clock,
    Eye,
} from 'lucide-react';
import { ContactMessage, Project } from '@/types';

interface DashboardProps {
    stats: {
        total_projects: number;
        published_projects: number;
        total_experiences: number;
        total_certificates: number;
        total_skills: number;
        total_categories: number;
        total_messages: number;
        unread_messages: number;
    };
    recentMessages: ContactMessage[];
    recentProjects: Project[];
}

export default function Dashboard({
    stats,
    recentMessages,
    recentProjects,
}: DashboardProps) {
    const metricCards = [
        {
            label: 'Projects',
            value: stats.total_projects,
            sub: `${stats.published_projects} published`,
            icon: FolderGit2,
            href: '/admin/projects',
            color: 'from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400',
        },
        {
            label: 'Experience Records',
            value: stats.total_experiences,
            sub: 'Career milestones',
            icon: Briefcase,
            href: '/admin/experience',
            color: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400',
        },
        {
            label: 'Certificates',
            value: stats.total_certificates,
            sub: 'Active certifications',
            icon: Award,
            href: '/admin/certificates',
            color: 'from-purple-500/20 to-violet-500/20 text-purple-600 dark:text-purple-400',
        },
        {
            label: 'Skills Listed',
            value: stats.total_skills,
            sub: `Across ${stats.total_categories} categories`,
            icon: Sparkles,
            href: '/admin/skills',
            color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400',
        },
        {
            label: 'Inquiries / Messages',
            value: stats.total_messages,
            sub: stats.unread_messages > 0 ? `${stats.unread_messages} unread inquiry` : 'All read',
            icon: Mail,
            href: '/admin/messages',
            color: stats.unread_messages > 0 ? 'from-rose-500/20 to-pink-500/20 text-rose-600 dark:text-rose-400' : 'from-slate-500/20 to-gray-500/20 text-slate-600 dark:text-slate-400',
            highlight: stats.unread_messages > 0,
        },
    ];

    return (
        <AdminLayout
            title="Overview & Statistics"
            subtitle="Real-time control over all your portfolio content and incoming inquiries."
            actions={
                <Link
                    href="/admin/projects/create"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                    <Plus className="h-4 w-4" />
                    <span>New Project</span>
                </Link>
            }
        >
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {metricCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Link
                            key={card.label}
                            href={card.href}
                            className={`group relative overflow-hidden rounded-2xl border bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 ${
                                card.highlight
                                    ? 'border-rose-300 dark:border-rose-900/60 ring-2 ring-rose-500/20'
                                    : 'border-slate-200/80 hover:border-slate-300 dark:hover:border-slate-700'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {card.label}
                                </span>
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.color}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <span className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white">
                                    {card.value}
                                </span>
                                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    {card.sub}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Quick Actions Bar */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/40">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    Quick Management Actions
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <Link
                        href="/admin/profile"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <UserCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Edit Profile</span>
                    </Link>
                    <Link
                        href="/admin/projects/create"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <FolderGit2 className="h-5 w-5 text-indigo-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Add Project</span>
                    </Link>
                    <Link
                        href="/admin/experience/create"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <Briefcase className="h-5 w-5 text-emerald-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Add Experience</span>
                    </Link>
                    <Link
                        href="/admin/certificates/create"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <Award className="h-5 w-5 text-purple-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Add Certificate</span>
                    </Link>
                    <Link
                        href="/admin/skills"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <Sparkles className="h-5 w-5 text-amber-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Manage Skills</span>
                    </Link>
                    <Link
                        href="/admin/messages"
                        className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                    >
                        <Mail className="h-5 w-5 text-rose-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">View Messages</span>
                    </Link>
                </div>
            </div>

            {/* Split Grid: Recent Inquiries & Recent Projects */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Recent Inquiries */}
                <div className="lg:col-span-6 rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-2.5">
                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <h2 className="font-bold text-base text-slate-900 dark:text-white">
                                Recent Inquiries
                            </h2>
                        </div>
                        <Link
                            href="/admin/messages"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                        >
                            <span>All Messages</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/60">
                        {recentMessages.length === 0 ? (
                            <p className="py-8 text-center text-xs text-slate-400">
                                No contact messages received yet.
                            </p>
                        ) : (
                            recentMessages.map((msg) => (
                                <Link
                                    key={msg.id}
                                    href="/admin/messages"
                                    className="block py-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/30 rounded-xl px-2 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                            {msg.name}
                                        </span>
                                        <span className="text-[11px] text-slate-400">
                                            {new Date(msg.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-1">
                                        {msg.subject ? `${msg.subject}: ` : ''}{msg.message}
                                    </p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-[11px] text-slate-400 font-mono">
                                            {msg.email}
                                        </span>
                                        {!msg.is_read && (
                                            <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-600 dark:text-rose-400">
                                                Unread
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>

                {/* Recent Projects */}
                <div className="lg:col-span-6 rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-2.5">
                            <FolderGit2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            <h2 className="font-bold text-base text-slate-900 dark:text-white">
                                Projects
                            </h2>
                        </div>
                        <Link
                            href="/admin/projects"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                        >
                            <span>Manage Projects</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/60">
                        {recentProjects.length === 0 ? (
                            <p className="py-8 text-center text-xs text-slate-400">
                                No projects added yet.
                            </p>
                        ) : (
                            recentProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex items-center justify-between py-3.5"
                                >
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                            {project.type}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                            project.is_published
                                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                        }`}>
                                            {project.is_published ? 'Published' : 'Draft'}
                                        </span>

                                        <Link
                                            href={`/admin/projects/${project.id}/edit`}
                                            className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
