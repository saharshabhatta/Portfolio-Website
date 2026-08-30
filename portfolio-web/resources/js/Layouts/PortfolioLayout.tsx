import { ReactNode } from 'react';

import Navigation from '@/Components/Navigation';
import ThemeToggle from '@/Components/ThemeToggle';
import Footer from "@/Layouts/Footer";

interface PortfolioLayoutProps {
    children: ReactNode;
}

export default function PortfolioLayout({
    children,
}: PortfolioLayoutProps) {
    return (
        <div className="min-h-screen bg-[#f4f2ed] text-[#22242f] transition-colors duration-500 dark:bg-[#22242f] dark:text-white">
            <Navigation />

            <main>
                {children}
            </main>

            <ThemeToggle />
            <Footer />
        </div>
    );
}
