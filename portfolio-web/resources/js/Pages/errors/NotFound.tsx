import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f8f9fa] px-6 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-blue-500/15" />
            <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            {/* Geometric Radial Lines */}
            <div className="pointer-events-none absolute -left-[280px] -top-[280px] h-[700px] w-[700px] rounded-full border border-slate-300/40 dark:border-slate-800/40" />
            <div className="pointer-events-none absolute -left-[380px] -top-[380px] h-[950px] w-[950px] rounded-full border border-slate-300/20 dark:border-slate-800/20" />
            <div className="pointer-events-none absolute -bottom-[300px] -right-[300px] h-[750px] w-[750px] rounded-full border border-slate-300/40 dark:border-slate-800/40" />
            <div className="pointer-events-none absolute -bottom-[420px] -right-[420px] h-[1050px] w-[1050px] rounded-full border border-slate-300/20 dark:border-slate-800/20" />

            {/* Background 404 Typography Watermark */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                <span className="font-mono text-[220px] font-extrabold leading-none text-slate-900/[0.03] sm:text-[320px] md:text-[420px] lg:text-[520px] dark:text-white/[0.025]">
                    404
                </span>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
                {/* Section Tag */}
                <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        Error 404
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-sans text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
                    Page{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                        Not Found.
                    </span>
                </h1>

                {/* Body Text */}
                <p className="mt-6 max-w-[540px] font-sans text-base font-normal leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
                    Looks like this page wandered outside the codebase.
                    The link may be broken, moved, or no longer available.
                </p>

                {/* CTA Action Buttons */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <a
                        href="/"
                        className="group inline-flex h-13 min-w-[190px] items-center justify-center gap-2.5 rounded-full bg-slate-900 px-7 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-md dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400 dark:hover:text-slate-950"
                    >
                        <Home className="h-4 w-4" />
                        <span>Back Home</span>
                    </a>

                    <button
                        type="button"
                        onClick={goBack}
                        className="group inline-flex h-13 min-w-[190px] items-center justify-center gap-2.5 rounded-full border border-slate-300/80 bg-white/70 px-7 text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Code Pill Footer */}
                <div className="mt-12 rounded-full border border-slate-200/80 bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/40">
                    <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                        route_not_found <span className="text-blue-600 dark:text-blue-400">→</span> redirecting creativity elsewhere
                    </span>
                </div>
            </div>

            {/* Page Footer Specs */}
            <div className="absolute bottom-8 left-0 right-0 z-10 px-6">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
                    <span>Saharsha Bhatta</span>
                    <span>Full Stack Developer</span>
                </div>
            </div>
        </main>
    );
}
