import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import Skills from '@/Components/home/Skills';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import Projects from "@/Pages/Projects";
import Experience from "@/Pages/Experience";
import Certificates from "@/Pages/Certificates";
import Contact from "@/Pages/Contact";

export default function Home() {
    return (
        <PortfolioLayout>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
        </PortfolioLayout>
    );
}
