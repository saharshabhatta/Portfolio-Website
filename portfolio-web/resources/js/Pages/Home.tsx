import { Head } from '@inertiajs/react';
import About from '@/Components/home/About';
import Hero from '@/Components/home/Hero';
import Skills from '@/Components/home/Skills';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import Projects from '@/Pages/Projects';
import Experience from '@/Pages/Experience';
import Certificates from '@/Pages/Certificates';
import Contact from '@/Pages/Contact';
import {
    Certificate,
    Experience as ExperienceType,
    ProfileSetting,
    Project,
    SkillCategory,
} from '@/types';

interface HomeProps {
    profile?: ProfileSetting;
    projects?: Project[];
    experiences?: ExperienceType[];
    certificates?: Certificate[];
    skillCategories?: SkillCategory[];
}

export default function Home({
    profile,
    projects,
    experiences,
    certificates,
    skillCategories,
}: HomeProps) {
    return (
        <PortfolioLayout>
            <Head title={`${profile?.full_name || 'Saharsha Bhatta'} — Portfolio`} />
            <Hero profile={profile} />
            <About profile={profile} />
            <Skills categories={skillCategories} />
            <Experience experiences={experiences} profile={profile} />
            <Projects projects={projects} profile={profile} />
            <Certificates certificates={certificates} profile={profile} />
            <Contact profile={profile} />
        </PortfolioLayout>
    );
}
