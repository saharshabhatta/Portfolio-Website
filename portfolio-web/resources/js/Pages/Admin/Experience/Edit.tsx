import { FormEventHandler, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { Save, ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceEditProps {
    experience: Experience;
}

export default function ExperienceEdit({ experience }: ExperienceEditProps) {
    const [skillInput, setSkillInput] = useState('');

    const { data, setData, put, processing, errors } = useForm({
        role: experience.role || '',
        company: experience.company || '',
        period: experience.period || '',
        location: experience.location || 'Remote',
        skills: experience.skills || [],
        description: experience.description || '',
        icon: experience.icon || 'BriefcaseBusiness',
        order: experience.order ?? 0,
        is_published: experience.is_published ?? true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('admin.experience.update', experience.id));
    };

    const addSkill = () => {
        if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
            setData('skills', [...data.skills, skillInput.trim()]);
            setSkillInput('');
        }
    };

    const removeSkill = (idx: number) => {
        setData(
            'skills',
            data.skills.filter((_, i) => i !== idx)
        );
    };

    return (
        <AdminLayout
            title={`Edit: ${experience.role}`}
            subtitle="Update experience record details and skills."
            actions={
                <Link
                    href="/admin/experience"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Experience</span>
                </Link>
            }
        >
            <form onSubmit={submit} className="space-y-8 max-w-4xl">
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Job Role / Position
                            </label>
                            <input
                                type="text"
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                required
                            />
                            {errors.role && (
                                <p className="mt-1 text-xs text-rose-500">{errors.role}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Company / Organization
                            </label>
                            <input
                                type="text"
                                value={data.company}
                                onChange={(e) => setData('company', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Period
                            </label>
                            <input
                                type="text"
                                value={data.period}
                                onChange={(e) => setData('period', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

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
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Description & Responsibilities
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows={4}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            required
                        />
                    </div>

                    {/* Skills Tags */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Key Skills Used in this Role
                        </label>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="text"
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addSkill();
                                    }
                                }}
                                placeholder="e.g. Laravel, React, REST APIs"
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={addSkill}
                                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-700"
                            >
                                Add Skill
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 text-xs font-mono font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    <span>{item}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeSkill(idx)}
                                        className="text-slate-400 hover:text-rose-500"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="is_published_exp_edit"
                                checked={data.is_published}
                                onChange={(e) => setData('is_published', e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-blue-600"
                            />
                            <label htmlFor="is_published_exp_edit" className="text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                                Published on website timeline
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link
                        href="/admin/experience"
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
                        <span>{processing ? 'Saving...' : 'Update Experience'}</span>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
