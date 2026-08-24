import { Link } from '@inertiajs/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? 'border-b border-slate-200/80 bg-[#f4f2ed]/90 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-[#22242f]/90 dark:shadow-lg'
                    : 'bg-[#f4f2ed] dark:bg-[#22242f]'
            }`}
        >
            <nav className="mx-auto flex h-[110px] w-full max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14 xl:px-16">
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-3"
                >
                    <div className="relative flex h-11 w-11 items-center justify-center">
                        <div className="absolute h-8 w-6 -rotate-[30deg] rounded-[3px] bg-slate-900 dark:bg-white" />

                        <div className="absolute bottom-[3px] right-[2px] h-[3px] w-6 -rotate-[30deg] rounded-full bg-slate-900 dark:bg-white" />
                    </div>

                    <span className="font-serif text-[30px] tracking-[-0.03em] text-slate-900 dark:text-white">
                        Saharsha
                    </span>
                </Link>

                <div className="hidden items-center gap-12 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="relative text-[16px] font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="group hidden h-[72px] min-w-[190px] items-center justify-center gap-5 rounded-full border border-slate-400/80 px-8 text-[16px] font-medium text-slate-800 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600/70 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-[#22242f] lg:flex"
                >
                    <span>Hire Me</span>

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-800 transition-all hover:border-slate-900 dark:border-slate-600 dark:text-white dark:hover:border-white lg:hidden"
                >
                    {isOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>

            <div
                className={`overflow-hidden border-t border-slate-200/80 bg-[#f4f2ed]/98 backdrop-blur-xl transition-all duration-300 dark:border-white/5 dark:bg-[#22242f]/95 lg:hidden ${
                    isOpen
                        ? 'max-h-[520px] opacity-100'
                        : 'pointer-events-none max-h-0 opacity-0'
                }`}
            >
                <div className="mx-auto flex max-w-[1500px] flex-col px-6 py-5 md:px-10">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="border-b border-slate-200 py-4 text-[17px] text-slate-600 transition-colors hover:text-slate-900 dark:border-white/5 dark:text-slate-400 dark:hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 flex h-[60px] items-center justify-center gap-4 rounded-full border border-slate-400 text-[16px] font-medium text-slate-800 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-[#22242f]"
                    >
                        <span>Hire Me</span>

                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
