import { FormEventHandler, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, router } from '@inertiajs/react';
import {
    Plus,
    Edit2,
    Trash2,
    Sparkles,
    Layers,
    Save,
    X,
    FolderPlus,
    ChevronDown,
    ChevronRight,
} from 'lucide-react';
import { Skill, SkillCategory } from '@/types';

interface SkillsIndexProps {
    categories: SkillCategory[];
}

export default function SkillsIndex({ categories }: SkillsIndexProps) {
    const [activeCategoryModal, setActiveCategoryModal] = useState<{
        mode: 'create' | 'edit';
        category?: SkillCategory;
    } | null>(null);

    const [activeSkillModal, setActiveSkillModal] = useState<{
        mode: 'create' | 'edit';
        categoryId: number;
        skill?: Skill;
    } | null>(null);

    // Category Form
    const categoryForm = useForm({
        number: '01',
        title: '',
        subtitle: '',
        icon: 'Code2',
        order: 0,
    });

    // Skill Form
    const skillForm = useForm({
        skill_category_id: 1,
        name: '',
        description: '',
        proficiency: 90,
        order: 0,
    });

    const openCreateCategory = () => {
        const nextNum = (categories.length + 1).toString().padStart(2, '0');
        categoryForm.setData({
            number: nextNum,
            title: '',
            subtitle: '',
            icon: 'Code2',
            order: categories.length + 1,
        });
        setActiveCategoryModal({ mode: 'create' });
    };

    const openEditCategory = (cat: SkillCategory) => {
        categoryForm.setData({
            number: cat.number || '01',
            title: cat.title,
            subtitle: cat.subtitle || '',
            icon: cat.icon || 'Code2',
            order: cat.order || 0,
        });
        setActiveCategoryModal({ mode: 'edit', category: cat });
    };

    const handleCategorySubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (activeCategoryModal?.mode === 'create') {
            categoryForm.post(route('admin.skill-categories.store'), {
                onSuccess: () => setActiveCategoryModal(null),
            });
        } else if (activeCategoryModal?.category) {
            categoryForm.put(
                route('admin.skill-categories.update', activeCategoryModal.category.id),
                {
                    onSuccess: () => setActiveCategoryModal(null),
                }
            );
        }
    };

    const handleDeleteCategory = (cat: SkillCategory) => {
        if (
            confirm(
                `Are you sure you want to delete category "${cat.title}" and all its skills?`
            )
        ) {
            router.delete(route('admin.skill-categories.destroy', cat.id));
        }
    };

    const openCreateSkill = (categoryId: number) => {
        skillForm.setData({
            skill_category_id: categoryId,
            name: '',
            description: '',
            proficiency: 90,
            order: 0,
        });
        setActiveSkillModal({ mode: 'create', categoryId });
    };

    const openEditSkill = (skill: Skill) => {
        skillForm.setData({
            skill_category_id: skill.skill_category_id,
            name: skill.name,
            description: skill.description || '',
            proficiency: skill.proficiency || 90,
            order: skill.order || 0,
        });
        setActiveSkillModal({
            mode: 'edit',
            categoryId: skill.skill_category_id,
            skill,
        });
    };

    const handleSkillSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (activeSkillModal?.mode === 'create') {
            skillForm.post(route('admin.skills.store'), {
                onSuccess: () => setActiveSkillModal(null),
            });
        } else if (activeSkillModal?.skill) {
            skillForm.put(route('admin.skills.update', activeSkillModal.skill.id), {
                onSuccess: () => setActiveSkillModal(null),
            });
        }
    };

    const handleDeleteSkill = (skill: Skill) => {
        if (confirm(`Remove skill "${skill.name}"?`)) {
            router.delete(route('admin.skills.destroy', skill.id));
        }
    };

    return (
        <AdminLayout
            title="Skills & Tech Stack Manager"
            subtitle="Organize your skills across domain categories, descriptions, and proficiency scores."
            actions={
                <button
                    onClick={openCreateCategory}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                    <FolderPlus className="h-4 w-4" />
                    <span>New Category</span>
                </button>
            }
        >
            <div className="space-y-8">
                {categories.length === 0 ? (
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-12 text-center backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                        <Sparkles className="mx-auto h-8 w-8 text-slate-400" />
                        <h3 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-200">
                            No Skill Categories Yet
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                            Create your first skill category (e.g. Backend, Frontend) to get started.
                        </p>
                        <button
                            onClick={openCreateCategory}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                        >
                            <Plus className="h-4 w-4" />
                            <span>Create Category</span>
                        </button>
                    </div>
                ) : (
                    categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50"
                        >
                            {/* Category Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800/60 dark:bg-slate-800/40">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-7 items-center rounded-lg bg-blue-600/10 px-2.5 font-mono text-xs font-bold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                        {cat.number}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                            {cat.title}
                                        </h3>
                                        {cat.subtitle && (
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {cat.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => openCreateSkill(cat.id)}
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-colors"
                                    >
                                        <Plus className="h-3.5 w-3.5" />
                                        <span>Add Skill</span>
                                    </button>
                                    <button
                                        onClick={() => openEditCategory(cat)}
                                        className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                                        title="Edit Category"
                                    >
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCategory(cat)}
                                        className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400"
                                        title="Delete Category"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className="p-6">
                                {(!cat.skills || cat.skills.length === 0) ? (
                                    <p className="text-xs text-slate-400 py-4 text-center">
                                        No skills added to this category yet.
                                    </p>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {cat.skills.map((skill) => (
                                            <div
                                                key={skill.id}
                                                className="group relative rounded-xl border border-slate-200/70 bg-white/90 p-4 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/60"
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                                                        {skill.name}
                                                    </h4>
                                                    <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100">
                                                        <button
                                                            onClick={() => openEditSkill(skill)}
                                                            className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                                                            title="Edit"
                                                        >
                                                            <Edit2 className="h-3.5 w-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteSkill(skill)}
                                                            className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {skill.description && (
                                                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                                                        {skill.description}
                                                    </p>
                                                )}

                                                {skill.proficiency && (
                                                    <div className="mt-3">
                                                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                                                            <span>Proficiency</span>
                                                            <span>{skill.proficiency}%</span>
                                                        </div>
                                                        <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-700">
                                                            <div
                                                                className="h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 transition-all"
                                                                style={{ width: `${skill.proficiency}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Modal: Category Create/Edit */}
            {activeCategoryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                {activeCategoryModal.mode === 'create'
                                    ? 'Add Skill Category'
                                    : 'Edit Category'}
                            </h3>
                            <button
                                onClick={() => setActiveCategoryModal(null)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleCategorySubmit} className="mt-4 space-y-4">
                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                        Number
                                    </label>
                                    <input
                                        type="text"
                                        value={categoryForm.data.number}
                                        onChange={(e) =>
                                            categoryForm.setData('number', e.target.value)
                                        }
                                        placeholder="01"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                        Category Title
                                    </label>
                                    <input
                                        type="text"
                                        value={categoryForm.data.title}
                                        onChange={(e) =>
                                            categoryForm.setData('title', e.target.value)
                                        }
                                        placeholder="e.g. Backend Development"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                    Subtitle / Description
                                </label>
                                <input
                                    type="text"
                                    value={categoryForm.data.subtitle}
                                    onChange={(e) =>
                                        categoryForm.setData('subtitle', e.target.value)
                                    }
                                    placeholder="Server & application logic"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setActiveCategoryModal(null)}
                                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={categoryForm.processing}
                                    className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                                >
                                    Save Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal: Skill Create/Edit */}
            {activeSkillModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                {activeSkillModal.mode === 'create'
                                    ? 'Add Skill to Category'
                                    : 'Edit Skill'}
                            </h3>
                            <button
                                onClick={() => setActiveSkillModal(null)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSkillSubmit} className="mt-4 space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                    Skill Name
                                </label>
                                <input
                                    type="text"
                                    value={skillForm.data.name}
                                    onChange={(e) => skillForm.setData('name', e.target.value)}
                                    placeholder="e.g. Laravel"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                    Skill Description
                                </label>
                                <textarea
                                    value={skillForm.data.description}
                                    onChange={(e) =>
                                        skillForm.setData('description', e.target.value)
                                    }
                                    rows={3}
                                    placeholder="Application architecture, APIs, and backend logic."
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                                    Proficiency (1-100%)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    value={skillForm.data.proficiency}
                                    onChange={(e) =>
                                        skillForm.setData(
                                            'proficiency',
                                            parseInt(e.target.value) || 90
                                        )
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setActiveSkillModal(null)}
                                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={skillForm.processing}
                                    className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                                >
                                    Save Skill
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
