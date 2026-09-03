import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import {
    Plus,
    Edit2,
    Trash2,
    ExternalLink,
    FolderGit2,
    Eye,
    Layers,
    CheckCircle2,
    XCircle,
} from 'lucide-react';
import { Project } from '@/types';
import { useState } from 'react';

interface ProjectsIndexProps {
    projects: Project[];
}

export default function ProjectsIndex({ projects }: ProjectsIndexProps) {
    const [search, setSearch] = useState('');

    const filteredProjects = projects.filter(
        (p) =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.type.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id: number, title: string) => {
        if (confirm(`Are you sure you want to delete project "${title}"?`)) {
            router.delete(route('admin.projects.destroy', id));
        }
    };

    return (
        <AdminLayout
            title="Projects Management"
            subtitle="Create, edit, showcase, and reorder all portfolio projects."
            actions={
                <Link
                    href="/admin/projects/create"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                    <Plus className="h-4 w-4" />
                    <span>Add Project</span>
                </Link>
            }
        >
            {/* Search Bar & Filter Header */}
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects by title, type, stack..."
                    className="w-full sm:w-80 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />

                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Showing {filteredProjects.length} of {projects.length} projects
                </span>
            </div>

            {/* Projects Table / Cards */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200/80 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Project</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Stack Tags</th>
                                <th className="px-6 py-4">Order</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {filteredProjects.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                        No projects found matching your query.
                                    </td>
                                </tr>
                            ) : (
                                filteredProjects.map((project) => (
                                    <tr
                                        key={project.id}
                                        className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/30"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="h-10 w-14 rounded-lg object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                                                        onError={(e) => {
                                                            (e.target as HTMLElement).style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                                        <FolderGit2 className="h-5 w-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white block text-sm">
                                                        {project.title}
                                                    </span>
                                                    <span className="text-[11px] text-slate-400 font-mono">
                                                        /{project.slug}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-300">
                                            {project.type}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1 max-w-xs">
                                                {project.stack?.slice(0, 3).map((st, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                                    >
                                                        {st}
                                                    </span>
                                                ))}
                                                {(project.stack?.length || 0) > 3 && (
                                                    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-400 dark:bg-slate-800">
                                                        +{(project.stack?.length || 0) - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-mono font-bold text-slate-500">
                                            #{project.order}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                                        project.is_published
                                                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                    }`}
                                                >
                                                    {project.is_published ? (
                                                        <>
                                                            <CheckCircle2 className="h-3 w-3" />
                                                            <span>Published</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <XCircle className="h-3 w-3" />
                                                            <span>Draft</span>
                                                        </>
                                                    )}
                                                </span>
                                                {project.is_featured && (
                                                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/projects/${project.id}/edit`}
                                                    className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                                                    title="Edit project"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(project.id, project.title)}
                                                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                                    title="Delete project"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
