import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import {
    Plus,
    Edit2,
    Trash2,
    Briefcase,
    CheckCircle2,
    XCircle,
} from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceIndexProps {
    experiences: Experience[];
}

export default function ExperienceIndex({ experiences }: ExperienceIndexProps) {
    const handleDelete = (id: number, role: string) => {
        if (confirm(`Are you sure you want to delete experience record "${role}"?`)) {
            router.delete(route('admin.experience.destroy', id));
        }
    };

    return (
        <AdminLayout
            title="Experience Management"
            subtitle="Manage your career timeline milestones, companies, and roles."
            actions={
                <Link
                    href="/admin/experience/create"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                    <Plus className="h-4 w-4" />
                    <span>Add Experience</span>
                </Link>
            }
        >
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200/80 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Role & Company</th>
                                <th className="px-6 py-4">Period</th>
                                <th className="px-6 py-4">Skills</th>
                                <th className="px-6 py-4">Order</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {experiences.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                        No experience records found.
                                    </td>
                                </tr>
                            ) : (
                                experiences.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/30"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                                                    <Briefcase className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white block text-sm">
                                                        {item.role}
                                                    </span>
                                                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                                        {item.company}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-mono font-medium text-slate-700 dark:text-slate-300">
                                            {item.period}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1 max-w-xs">
                                                {item.skills?.map((sk, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                                    >
                                                        {sk}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-mono font-bold text-slate-500">
                                            #{item.order}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                                    item.is_published
                                                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                }`}
                                            >
                                                {item.is_published ? (
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
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/experience/${item.id}/edit`}
                                                    className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                                                    title="Edit experience"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id, item.role)}
                                                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                                    title="Delete experience"
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
