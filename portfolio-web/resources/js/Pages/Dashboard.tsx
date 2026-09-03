import { useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function Dashboard() {
    useEffect(() => {
        router.visit(route('admin.dashboard'));
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Loading Admin Dashboard...
                </span>
            </div>
        </div>
    );
}
