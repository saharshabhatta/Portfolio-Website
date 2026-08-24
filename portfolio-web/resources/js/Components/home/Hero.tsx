import React, { ReactNode, useCallback } from 'react';
import { ChevronUp, Download, Play } from 'lucide-react';
import {FacebookIcon} from "@/Components/svg/FacebookIcon";
import {DribbbleIcon} from "@/Components/svg/DribbbleIcon";
import {LinkedinIcon} from "@/Components/svg/LinkedinIcon";

interface SocialLink {
    href: string;
    label: string;
    angle: number;
    icon: ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: '#facebook',
        label: 'Facebook',
        angle: -58,
        icon: <FacebookIcon />,
    },
    {
        href: '#dribbble',
        label: 'Dribbble',
        angle: -28,
        icon: <DribbbleIcon />,
    },
    {
        href: '#behance',
        label: 'Behance',
        angle: 0,
        icon: <span className="text-[18px] font-semibold">Bē</span>,
    },
    {
        href: '#linkedin',
        label: 'LinkedIn',
        angle: 34,
        icon: <LinkedinIcon />,
    },
];

const ARC_RADIUS = 350;
const ARC_CENTER_X = -150;

function useScrollToTop() {
    return useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
}

interface ArcRingProps {
    radiusOffset?: number;
    className?: string;
}

function ArcRing({radiusOffset = 0, className,}: ArcRingProps) {
    const radius = ARC_RADIUS + radiusOffset;

    return (
        <div
            className={`absolute top-1/2 rounded-full border ${className ?? ''}`}
            style={{
                width: radius * 2,
                height: radius * 2,
                left: ARC_CENTER_X - radius,
                transform: 'translateY(-50%)',
            }}
        />
    );
}

function SocialButton({href, label, angle, icon,}: SocialLink) {
    const radians = (angle * Math.PI) / 180;

    const x =
        ARC_CENTER_X +
        ARC_RADIUS * Math.cos(radians);

    const y =
        ARC_RADIUS * Math.sin(radians);

    return (
        <a
            href={href}
            aria-label={label}
            className="pointer-events-auto absolute flex h-[64px] w-[64px] items-center justify-center rounded-full border border-slate-300/80 bg-[#22242f] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#22242f]"
            style={{
                left: x,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            {icon}
        </a>
    );
}

function SocialArc() {
    return (
        <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
            <ArcRing className="border-slate-500/45" />

            <ArcRing
                radiusOffset={105}
                className="border-slate-600/25"
            />

            <ArcRing
                radiusOffset={-100}
                className="border-slate-600/30"
            />

            {SOCIAL_LINKS.map((social) => (
                <SocialButton
                    key={social.label}
                    {...social}
                />
            ))}
        </div>
    );
}

function BackgroundDecorations() {
    return (
        <>
            <div className="pointer-events-none absolute -bottom-[400px] -left-[400px] h-[900px] w-[900px] rounded-full border border-slate-600/25" />

            <div className="pointer-events-none absolute -bottom-[500px] -left-[500px] h-[1150px] w-[1150px] rounded-full border border-slate-600/20" />
        </>
    );
}

function HeroTitle() {
    return (
        <div className="relative inline-block">
            <h1 className="whitespace-nowrap font-serif text-[58px] leading-[0.95] tracking-[-0.04em] text-[#f7f7f8] sm:text-[72px] md:text-[88px] lg:text-[92px] xl:text-[112px]">
              Saharsha Bhatta
            </h1>

            <svg
                viewBox="0 0 300 40"
                fill="none"
                className="absolute -bottom-10 right-[2%] h-10 w-[48%] text-slate-500/60"
            >
                <path
                    d="M5 22 C35 7 58 8 84 17 C108 26 132 25 154 17 C178 9 202 9 224 17 C248 26 270 25 295 14"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}

function HeroContent() {
    return (
        <div className="relative z-20 pt-16 lg:col-span-5 lg:pt-0">
            <div className="max-w-[700px]">
                <HeroTitle />

                <p className="mt-24 max-w-[540px] text-[18px] font-light leading-relaxed text-slate-400 md:text-[21px]">
                    Full Stack Developer specializing in Laravel and React.
                </p>

                <a
                    href="#resume"
                    className="mt-16 inline-flex h-[96px] min-w-[380px] items-center justify-center gap-5 rounded-full border border-slate-600/70 bg-transparent px-10 text-[18px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#22242f]"
                >
                    <span>Get Resume</span>

                    <Download className="h-5 w-5" />
                </a>
            </div>
        </div>
    );
}

function HeroImage() {
    return (
        <div className="relative z-10 h-full w-full lg:w-[calc(100%_-_240px)]">
            <img
                // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90"
                // alt="Mirta Akins"
                // className="h-[580px] w-full object-cover object-top sm:h-[680px] lg:h-full lg:min-h-[760px]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#22242f]/60 to-transparent" />
        </div>
    );
}

function HeroVisual() {
    return (
        <div className="relative mt-12 flex items-end justify-center lg:col-span-7 lg:mt-0 lg:h-full lg:justify-start">
            <div className="relative w-full max-w-[860px] lg:-ml-8 lg:h-screen lg:max-h-[900px] xl:-ml-14">
                <HeroImage />

                <div className="absolute bottom-0 right-0 top-0 z-20 hidden w-[240px] lg:block">
                    <SocialArc />
                </div>
            </div>
        </div>
    );
}


function ScrollToTopButton() {
    const scrollToTop = useScrollToTop();

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-600 text-slate-400 transition-all duration-300 hover:border-white hover:text-white"
        >
            <ChevronUp className="h-5 w-5" />
        </button>
    );
}

function BottomControls() {
    return (
        <div className="relative z-40 flex items-center justify-between pb-8 pt-6">
            <ScrollToTopButton />
        </div>
    );
}

export default function Hero() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#22242f] text-white">
            <BackgroundDecorations />

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1700px] flex-col px-6 md:px-10 lg:px-14 xl:px-16">
                <section className="grid flex-1 grid-cols-1 items-center lg:grid-cols-12">
                    <HeroContent />

                    <HeroVisual />
                </section>

                <BottomControls />
            </div>
        </main>
    );
}
