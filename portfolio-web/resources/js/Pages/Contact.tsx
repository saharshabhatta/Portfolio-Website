import { Head } from '@inertiajs/react';
import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageSquare,
    Send,
} from 'lucide-react';

import PortfolioLayout from '@/Layouts/PortfolioLayout';

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-[#f8f9fa] py-28 text-[#1a1a1a] transition-colors duration-500 dark:bg-[#0d0f17] dark:text-white"
        >
            {/* Ambient background glow & radial patterns */}
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-indigo-500/15" />
            <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-emerald-500/10" />

            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                {/* Section header tag */}
                <div className="mb-20 flex items-center gap-4">
                    <span className="flex h-7 items-center rounded-full bg-slate-200/60 px-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                        06
                    </span>
                    <div className="h-px w-12 bg-slate-300 dark:bg-slate-700/80" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Get In Touch
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 space-y-8">
                            <div>
                                <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                                    Let&apos;s build{' '}
                                    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                                        something useful.
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-md text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                    Whether you have a project, a development opportunity, or simply want to discuss an idea, feel free to reach out.
                                </p>
                            </div>

                            {/* Contact Quick Info Cards */}
                            <div className="space-y-4 pt-2">
                                <a
                                    href="mailto:hello@saharsha.dev"
                                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:bg-slate-900/80"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950/50 dark:group-hover:text-blue-400">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <span className="block text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            Email Direct
                                        </span>
                                        <span className="mt-0.5 block text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                            hello@saharsha.dev
                                        </span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                        <MapPin className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <span className="block text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            Location & Work Mode
                                        </span>
                                        <span className="mt-0.5 block text-sm font-semibold text-slate-900 dark:text-white">
                                            Nepal · Available Remote
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Stat cards grid */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">
                                        Available
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        For Opportunities
                                    </span>
                                </div>
                                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
                                    <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">
                                        Global
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Remote Friendly
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Form Container) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-7 shadow-sm backdrop-blur-md transition-all md:p-10 dark:border-slate-800/80 dark:bg-slate-900/40">
                            {/* Form heading */}
                            <div className="mb-10 flex items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/60">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                        Start a Conversation
                                    </span>
                                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-white">
                                        Send a message.
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                            </div>

                            <form
                                className="space-y-6"
                                onSubmit={(event) => event.preventDefault()}
                            >
                                <div className="grid gap-6 md:grid-cols-2">
                                    <label className="grid gap-2">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Your Name
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Jane Doe"
                                            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/10"
                                        />
                                    </label>

                                    <label className="grid gap-2">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Email Address
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="jane@example.com"
                                            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/10"
                                        />
                                    </label>
                                </div>

                                <label className="grid gap-2 pt-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Message
                                    </span>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me a little about what you have in mind..."
                                        className="resize-none rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/10"
                                    />
                                </label>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
                                    <button
                                        type="submit"
                                        className="group inline-flex h-12 items-center gap-3 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
                                    >
                                        <span>Send Message</span>
                                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </button>

                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        I&apos;ll get back to you as soon as possible.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
