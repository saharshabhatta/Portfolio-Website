import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import Skills from '@/Components/home/Skills';
import PortfolioLayout from '@/Layouts/PortfolioLayout';

export default function Home() {
    return (
        <PortfolioLayout>
            <Hero />
            <About />
            <Skills />
        </PortfolioLayout>
    );
}
