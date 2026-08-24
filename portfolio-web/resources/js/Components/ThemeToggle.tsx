import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        const initialTheme =
            savedTheme ?? (systemPrefersDark ? 'dark' : 'light');

        setTheme(initialTheme);
        applyTheme(initialTheme);
        setMounted(true);
    }, []);

    const applyTheme = (selectedTheme: Theme) => {
        if (selectedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    if (!mounted) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-800 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-slate-400 dark:border-slate-600 dark:bg-[#22242f]/90 dark:text-white dark:hover:border-slate-400"
        >
            <span
                className={`absolute transition-all duration-500 ${
                    theme === 'dark'
                        ? 'rotate-0 scale-100 opacity-100'
                        : '-rotate-90 scale-0 opacity-0'
                }`}
            >
                <Moon className="h-5 w-5" />
            </span>

            <span
                className={`absolute transition-all duration-500 ${
                    theme === 'light'
                        ? 'rotate-0 scale-100 opacity-100'
                        : 'rotate-90 scale-0 opacity-0'
                }`}
            >
                <Sun className="h-5 w-5" />
            </span>
        </button>
    );
}
