import { FormEventHandler, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import {
    Save,
    Upload,
    Plus,
    Trash2,
    CheckCircle2,
    FileText,
    Image as ImageIcon,
    ExternalLink,
} from 'lucide-react';
import { ProfileSetting, SocialLink } from '@/types';

interface ProfileIndexProps {
    profile: ProfileSetting;
}

export default function ProfileIndex({ profile }: ProfileIndexProps) {
    const [tagInput, setTagInput] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        full_name: profile.full_name || '',
        title_prefix: profile.title_prefix || '',
        title_highlight: profile.title_highlight || '',
        headline: profile.headline || '',
        sub_headline: profile.sub_headline || '',
        about_heading: profile.about_heading || '',
        about_intro: profile.about_intro || '',
        about_description: profile.about_description || '',
        email: profile.email || '',
        phone: profile.phone || '',
        location: profile.location || '',
        availability_status: profile.availability_status || '',
        is_available_for_hire: profile.is_available_for_hire ?? true,
        resume_url: profile.resume_url || '',
        resume_file: null as File | null,
        avatar_image: profile.avatar_image || '',
        avatar_file: null as File | null,
        experience_badge_label: profile.experience_badge_label || 'Career Started',
        experience_badge_value: profile.experience_badge_value || '2025',
        focus_badge_label: profile.focus_badge_label || 'Core Focus',
        focus_badge_value: profile.focus_badge_value || 'Full-Stack',
        tech_stack_tags: profile.tech_stack_tags || [],
        social_links: profile.social_links || [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.profile.update'), {
            forceFormData: true,
        });
    };

    const addTag = () => {
        if (tagInput.trim() && !data.tech_stack_tags.includes(tagInput.trim())) {
            setData('tech_stack_tags', [...data.tech_stack_tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (indexToRemove: number) => {
        setData(
            'tech_stack_tags',
            data.tech_stack_tags.filter((_, index) => index !== indexToRemove)
        );
    };

    const addSocialLink = () => {
        const newSocial: SocialLink = {
            platform: '',
            url: '',
            handle: '',
            icon: '',
            order: data.social_links.length + 1,
        };
        setData('social_links', [...data.social_links, newSocial]);
    };

    const updateSocialLink = (
        index: number,
        field: keyof SocialLink,
        val: string
    ) => {
        const updated = [...data.social_links];
        updated[index] = { ...updated[index], [field]: val };
        setData('social_links', updated);
    };

    const removeSocialLink = (index: number) => {
        setData(
            'social_links',
            data.social_links.filter((_, i) => i !== index)
        );
    };

    return (
        <AdminLayout
            title="Profile & Site Settings"
            subtitle="Manage your personal information, hero text, about section, social links, and resume."
        >
            <form onSubmit={submit} className="space-y-8">
                {/* 1. Hero & Header Info */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        1. Hero Section & Main Identification
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={data.full_name}
                                onChange={(e) => setData('full_name', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                required
                            />
                            {errors.full_name && (
                                <p className="mt-1 text-xs text-rose-500">{errors.full_name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Title First Name / Prefix
                            </label>
                            <input
                                type="text"
                                value={data.title_prefix}
                                onChange={(e) => setData('title_prefix', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="Saharsha"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Title Last Name / Highlight
                            </label>
                            <input
                                type="text"
                                value={data.title_highlight}
                                onChange={(e) => setData('title_highlight', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="Bhatta"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Hero Headline
                            </label>
                            <input
                                type="text"
                                value={data.headline}
                                onChange={(e) => setData('headline', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="Full Stack Developer specializing in Laravel and React."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Sub Headline
                            </label>
                            <input
                                type="text"
                                value={data.sub_headline}
                                onChange={(e) => setData('sub_headline', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="I build ideas into digital products."
                            />
                        </div>
                    </div>
                </div>

                {/* 2. Contact & Availability Settings */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        2. Contact & Availability Details
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Direct Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Phone (Optional)
                            </label>
                            <input
                                type="text"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Location & Mode
                            </label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="Nepal · Available Remote"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Availability Status Text
                            </label>
                            <input
                                type="text"
                                value={data.availability_status}
                                onChange={(e) => setData('availability_status', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="Available for new opportunities"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="is_available_for_hire"
                            checked={data.is_available_for_hire}
                            onChange={(e) => setData('is_available_for_hire', e.target.checked)}
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="is_available_for_hire" className="text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                            Mark as currently available for hire (Enables green pulsing badge across header/footer)
                        </label>
                    </div>
                </div>

                {/* 3. About Section Content */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        3. About Me Section Content
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                About Heading
                            </label>
                            <input
                                type="text"
                                value={data.about_heading}
                                onChange={(e) => setData('about_heading', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="I build ideas into digital products."
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                About Intro (Lead Paragraph)
                            </label>
                            <textarea
                                value={data.about_intro}
                                onChange={(e) => setData('about_intro', e.target.value)}
                                rows={3}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                About Full Description (Paragraphs)
                            </label>
                            <textarea
                                value={data.about_description}
                                onChange={(e) => setData('about_description', e.target.value)}
                                rows={6}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Badges & Technologies Tags */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        4. Metric Badges & Technologies Tags
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Badge 1 Label
                            </label>
                            <input
                                type="text"
                                value={data.experience_badge_label}
                                onChange={(e) => setData('experience_badge_label', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Badge 1 Value
                            </label>
                            <input
                                type="text"
                                value={data.experience_badge_value}
                                onChange={(e) => setData('experience_badge_value', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Badge 2 Label
                            </label>
                            <input
                                type="text"
                                value={data.focus_badge_label}
                                onChange={(e) => setData('focus_badge_label', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Badge 2 Value
                            </label>
                            <input
                                type="text"
                                value={data.focus_badge_value}
                                onChange={(e) => setData('focus_badge_value', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Technologies Tags Editor */}
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                            Technologies I Work With (Tags in About section)
                        </label>

                        <div className="flex gap-2 mb-4">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addTag();
                                    }
                                }}
                                placeholder="Type a tech name (e.g. Docker, GraphQL) and press Add"
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={addTag}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
                            >
                                <Plus className="h-4 w-4" />
                                <span>Add</span>
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {data.tech_stack_tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    <span>{tag}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeTag(idx)}
                                        className="text-slate-400 hover:text-rose-500"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Resume & Files */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        5. Resume Document & Avatar
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Resume URL or File
                            </label>
                            <input
                                type="text"
                                value={data.resume_url}
                                onChange={(e) => setData('resume_url', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="https://example.com/resume.pdf or upload below"
                            />

                            <div className="mt-3">
                                <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 cursor-pointer">
                                    <Upload className="h-4 w-4" />
                                    <span>Upload new Resume PDF / Doc</span>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setData('resume_file', e.target.files[0]);
                                            }
                                        }}
                                    />
                                </label>
                                {data.resume_file && (
                                    <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        <span>Selected: {data.resume_file.name}</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Avatar / Hero Image
                            </label>
                            <input
                                type="text"
                                value={data.avatar_image}
                                onChange={(e) => setData('avatar_image', e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                placeholder="/images/saharsha.png or upload below"
                            />

                            <div className="mt-3">
                                <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 cursor-pointer">
                                    <Upload className="h-4 w-4" />
                                    <span>Upload new Avatar Image</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setData('avatar_file', e.target.files[0]);
                                            }
                                        }}
                                    />
                                </label>
                                {data.avatar_file && (
                                    <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        <span>Selected: {data.avatar_file.name}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. Social Links Repeater */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-6">
                        <h2 className="text-base font-bold text-slate-900 dark:text-white">
                            6. Social Links & Profiles
                        </h2>
                        <button
                            type="button"
                            onClick={addSocialLink}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600/10 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                        >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add Platform</span>
                        </button>
                    </div>

                    <div className="space-y-4">
                        {data.social_links.map((link, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40"
                            >
                                <div className="sm:col-span-3">
                                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                                        Platform
                                    </label>
                                    <input
                                        type="text"
                                        value={link.platform}
                                        onChange={(e) => updateSocialLink(idx, 'platform', e.target.value)}
                                        placeholder="e.g. GitHub, LinkedIn, Twitter"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-4">
                                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                                        URL Link
                                    </label>
                                    <input
                                        type="text"
                                        value={link.url}
                                        onChange={(e) => updateSocialLink(idx, 'url', e.target.value)}
                                        placeholder="https://..."
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-4">
                                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                                        Handle / Display Text
                                    </label>
                                    <input
                                        type="text"
                                        value={link.handle}
                                        onChange={(e) => updateSocialLink(idx, 'handle', e.target.value)}
                                        placeholder="@username or Full Name"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="sm:col-span-1 flex justify-end pt-4 sm:pt-0">
                                    <button
                                        type="button"
                                        onClick={() => removeSocialLink(idx)}
                                        className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Save Button Bar */}
                <div className="sticky bottom-6 z-20 flex items-center justify-end gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 disabled:opacity-50"
                    >
                        <Save className="h-4 w-4" />
                        <span>{processing ? 'Saving Changes...' : 'Save All Changes'}</span>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
