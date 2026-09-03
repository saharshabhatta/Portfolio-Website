import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import {
    Plus,
    Edit2,
    Trash2,
    Award,
    ExternalLink,
    CheckCircle2,
    XCircle,
} from 'lucide-react';
import { Certificate } from '@/types';

interface CertificatesIndexProps {
    certificates: Certificate[];
}

export default function CertificatesIndex({ certificates }: CertificatesIndexProps) {
    const handleDelete = (id: number, title: string) => {
        if (confirm(`Are you sure you want to delete certificate "${title}"?`)) {
            router.delete(route('admin.certificates.destroy', id));
        }
    };

    return (
        <AdminLayout
            title="Certificates Management"
            subtitle="Showcase your professional courses, achievements, and credentials."
            actions={
                <Link
                    href="/admin/certificates/create"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                    <Plus className="h-4 w-4" />
                    <span>Add Certificate</span>
                </Link>
            }
        >
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200/80 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Certificate</th>
                                <th className="px-6 py-4">Issuer</th>
                                <th className="px-6 py-4">Year</th>
                                <th className="px-6 py-4">Focus Topics</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {certificates.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                        No certificates recorded yet.
                                    </td>
                                </tr>
                            ) : (
                                certificates.map((cert) => (
                                    <tr
                                        key={cert.id}
                                        className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/30"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {cert.image ? (
                                                    <img
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        className="h-10 w-14 rounded-lg object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                                                        onError={(e) => {
                                                            (e.target as HTMLElement).style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400">
                                                        <Award className="h-5 w-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white block text-sm">
                                                        {cert.title}
                                                    </span>
                                                    {cert.link && cert.link !== '#' && (
                                                        <a
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-[11px] text-blue-600 hover:underline flex items-center gap-1"
                                                        >
                                                            <span>Credential</span>
                                                            <ExternalLink className="h-2.5 w-2.5" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                                            {cert.issuer}
                                        </td>

                                        <td className="px-6 py-4 font-mono font-bold text-slate-500">
                                            {cert.year}
                                        </td>

                                        <td className="px-6 py-4 max-w-xs text-slate-600 dark:text-slate-300 truncate">
                                            {cert.focus}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                                    cert.is_published
                                                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                }`}
                                            >
                                                {cert.is_published ? (
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
                                                    href={`/admin/certificates/${cert.id}/edit`}
                                                    className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                                                    title="Edit certificate"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(cert.id, cert.title)}
                                                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                                    title="Delete certificate"
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
