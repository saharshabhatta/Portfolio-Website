import { FormEventHandler, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import {
    Save,
    ArrowLeft,
    Plus,
    Trash2,
    Upload,
    CheckCircle2,
} from 'lucide-react';

export default function ProjectCreate() {
    const [stackInput, setStackInput] = useState('');
    const [highlightInput, setHighlightInput] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        type: 'Web Application',
        description: '',
        content: '',
        stack: [] as string[],
        highlights: [] as string[],
        icon: 'Layers3',
        image: '',
        image_file: null as File | null,
        link: '#',
        github_link: '',
        order: 0,
        is_featured: true,
        is_published: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.projects.store'), {
            forceFormData: true,
        });
    };

    const addStackTag = () => {
        if (stackInput.trim() && !data.stack.includes(stackInput.trim())) {
            setData('stack', [...data.stack, stackInput.trim()]);
            setStackInput('');
        }
    };

    const removeStackTag = (idx: number) => {
        setData(
            'stack',
            data.stack.filter((_, i) => i !== idx)
        );
    };

    const addHighlight = () => {
        if (highlightInput.trim() && !data.highlights.includes(highlightInput.trim())) {
            setData('highlights', [...data.highlights, highlightInput.trim()]);
            setHighlightInput('');
        }
    };

    const removeHighlight = (idx: number) => {
        setData(
            'highlights',
            data.highlights.filter((_, i) => i !== idx)
        );
    };

    return (
        <AdminLayout
            title="Create Project"
            subtitle="Add a new project to your showcase."
            actions={
                <Link
                    href="/admin/projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Projects</span>
                </Link>
            }
        >
            <form onSubmit={submit} className="space-y-8 max-w-4xl">
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Project Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="e.g. Portfolio Platform"
                                required
                            />
                            {errors.title && (
                                <p className="mt-1 text-xs text-rose-500">{errors.title}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Project Type / Category
                            </label>
                            <input
                                type="text"
                                value={data.type}
                                onChange={(e) => setData('type', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="e.g. Web Application, Personal Project, E-Commerce"
                                required
                            />
                            {errors.type && (
                                <p className="mt-1 text-xs text-rose-500">{errors.type}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Short Description (Shown on cards)
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
                            placeholder="Briefly describe what this project does and problems it solves..."
                            required
                        />
                        {errors.description && (
                            <p className="mt-1 text-xs text-rose-500">{errors.description}</p>
                        )}
                    </div>

                    {/* Stack Tags */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Tech Stack Tags
                        </label>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="text"
                                value={stackInput}
                                onChange={(e) => setStackInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addStackTag();
                                    }
                                }}
                                placeholder="e.g. React, TypeScript, Tailwind"
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={addStackTag}
                                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-700"
                            >
                                Add Tag
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.stack.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 text-xs font-mono font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    <span>{item}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeStackTag(idx)}
                                        className="text-slate-400 hover:text-rose-500"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Highlights Repeater */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Key Highlights / Bullet Points
                        </label>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="text"
                                value={highlightInput}
                                onChange={(e) => setHighlightInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addHighlight();
                                    }
                                }}
                                placeholder="e.g. RESTful API Integration, Sub-second Page Loads"
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={addHighlight}
                                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-700"
                            >
                                Add Highlight
                            </button>
                        </div>
                        <div className="space-y-1.5">
                            {data.highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                                >
                                    <span>• {item}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeHighlight(idx)}
                                        className="text-slate-400 hover:text-rose-500"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image URL & Upload */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Image URL or File Upload
                            </label>
                            <input
                                type="text"
                                value={data.image}
                                onChange={(e) => setData('image', e.target.value)}
                                placeholder="/images/projects/preview.jpg or https://..."
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />

                            <div className="mt-3">
                                <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 cursor-pointer">
                                    <Upload className="h-4 w-4" />
                                    <span>Or upload image file</span>
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

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Live Demo URL
                                </label>
                                <input
                                    type="text"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                    placeholder="https://..."
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    GitHub URL
                                </label>
                                <input
                                    type="text"
                                    value={data.github_link}
                                    onChange={(e) => setData('github_link', e.target.value)}
                                    placeholder="https://github.com/..."
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Flags & Order */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
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
                                id="is_published"
                                checked={data.is_published}
                                onChange={(e) => setData('is_published', e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-blue-600"
                            />
                            <label htmlFor="is_published" className="text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                                Publish on website
                            </label>
                        </div>

                        <div className="flex items-center gap-3 pt-6">
                            <input
                                type="checkbox"
                                id="is_featured"
                                checked={data.is_featured}
                                onChange={(e) => setData('is_featured', e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-blue-600"
                            />
                            <label htmlFor="is_featured" className="text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                                Featured project
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link
                        href="/admin/projects"
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
                        <span>{processing ? 'Saving...' : 'Create Project'}</span>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
