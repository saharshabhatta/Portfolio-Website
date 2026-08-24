import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#22242f] px-6 text-white">
            <div className="pointer-events-none absolute -left-[280px] -top-[280px] h-[700px] w-[700px] rounded-full border border-slate-500/20" />

            <div className="pointer-events-none absolute -left-[380px] -top-[380px] h-[950px] w-[950px] rounded-full border border-slate-500/10" />

            <div className="pointer-events-none absolute -bottom-[300px] -right-[300px] h-[750px] w-[750px] rounded-full border border-slate-500/20" />

            <div className="pointer-events-none absolute -bottom-[420px] -right-[420px] h-[1050px] w-[1050px] rounded-full border border-slate-500/10" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                <span className="font-serif text-[220px] leading-none text-white/[0.025] sm:text-[320px] md:text-[420px] lg:text-[520px]">
                    404
                </span>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
                <div className="mb-8 flex items-center gap-3">
                    <span className="h-[1px] w-10 bg-slate-500" />

                    <span className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                        Error 404
                    </span>

                    <span className="h-[1px] w-10 bg-slate-500" />
                </div>

                <h1 className="font-serif text-[58px] leading-[0.95] tracking-[-0.04em] text-[#f7f7f8] sm:text-[74px] md:text-[92px] lg:text-[108px]">
                    Page Not Found
                </h1>

                <p className="mt-10 max-w-[560px] text-[17px] font-light leading-relaxed text-slate-400 md:text-[20px]">
                    Looks like this page wandered outside the codebase.
                    The link may be broken, moved, or no longer available.
                </p>

                <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row">
                    <a
                        href="/"
                        className="group inline-flex h-[72px] min-w-[210px] items-center justify-center gap-3 rounded-full border border-slate-500/70 px-8 text-[16px] font-medium transition-all duration-300 hover:border-white hover:bg-white hover:text-[#22242f]"
                    >
                        <Home className="h-4 w-4" />

                        <span>Back Home</span>
                    </a>

                    <button
                        type="button"
                        onClick={goBack}
                        className="group inline-flex h-[72px] min-w-[210px] items-center justify-center gap-3 rounded-full border border-slate-700 px-8 text-[16px] font-medium text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

                        <span>Go Back</span>
                    </button>
                </div>

                <div className="mt-16 rounded-full border border-slate-700/70 px-6 py-3">
                    <span className="font-mono text-[12px] tracking-wide text-slate-500 md:text-[13px]">
                        route_not_found → redirecting creativity elsewhere
                    </span>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-10 px-6">
                <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[12px] uppercase tracking-[0.2em] text-slate-600">
                    <span>Saharsha Bhatta</span>

                    <span>Full Stack Developer</span>
                </div>
            </div>
        </main>
    );
}
