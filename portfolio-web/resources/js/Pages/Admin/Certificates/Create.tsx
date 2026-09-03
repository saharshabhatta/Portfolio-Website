import { FormEventHandler } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { Save, ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';

export default function CertificateCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        issuer: '',
        year: new Date().getFullYear().toString(),
        focus: '',
        link: '#',
        image: '',
        image_file: null as File | null,
        order: 0,
        is_published: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.certificates.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout
            title="Add Certificate"
            subtitle="Add a new certificate or verified credential."
            actions={
                <Link
                    href="/admin/certificates"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Certificates</span>
                </Link>
            }
        >
            <form onSubmit={submit} className="space-y-8 max-w-4xl">
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Certificate Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="e.g. Laravel Development"
                                required
                            />
                            {errors.title && (
                                <p className="mt-1 text-xs text-rose-500">{errors.title}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Year / Issued
                            </label>
                            <input
                                type="text"
                                value={data.year}
                                onChange={(e) => setData('year', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="2025"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Issuer / Platform
                            </label>
                            <input
                                type="text"
                                value={data.issuer}
                                onChange={(e) => setData('issuer', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="e.g. Professional Learning, Coursera, Meta"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Credential Verification Link
                            </label>
                            <input
                                type="text"
                                value={data.link}
                                onChange={(e) => setData('link', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="https://..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Focus Topics & Description
                        </label>
                        <textarea
                            value={data.focus}
                            onChange={(e) => setData('focus', e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            placeholder="Briefly state topics covered in this certification..."
                            required
                        />
                    </div>

                    {/* Certificate Image */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Certificate Image URL or Upload
                        </label>
                        <input
                            type="text"
                            value={data.image}
                            onChange={(e) => setData('image', e.target.value)}
                            placeholder="/images/certificates/laravel-cert.jpg or https://..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />

                        <div className="mt-3">
                            <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 cursor-pointer">
                                <Upload className="h-4 w-4" />
                                <span>Upload certificate image</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setData('image_file', e.target.files[0]);
                                        }
                                    }}
                                />
                            </label>
                            {data.image_file && (
                                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    <span>Selected: {data.image_file.name}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Sort Order
                            </label>
                            <input
                                type="number"
                                value={data.order}
                                onChange={(e) => setData('order', parseInt(e.target.value) || 0)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-6">
                            <input
                                type="checkbox"
                                id="is_published_cert"
                                checked={data.is_published}
                                onChange={(e) => setData('is_published', e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-blue-600"
                            />
                            <label htmlFor="is_published_cert" className="text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                                Publish on certificates section
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link
                        href="/admin/certificates"
                        className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
                    >
                        <Save className="h-4 w-4" />
                        <span>{processing ? 'Saving...' : 'Create Certificate'}</span>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
