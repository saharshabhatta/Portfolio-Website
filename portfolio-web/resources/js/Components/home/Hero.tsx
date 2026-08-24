import React, {
    ReactNode,
    useCallback,
} from 'react';
import { ChevronUp, Download } from 'lucide-react';

import { FacebookIcon } from '@/Components/svg/FacebookIcon';
import { DribbbleIcon } from '@/Components/svg/DribbbleIcon';
import { LinkedinIcon } from '@/Components/svg/LinkedinIcon';

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
        icon: (
            <span className="text-[18px] font-semibold">
                Bē
            </span>
        ),
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

function ArcRing({
                     radiusOffset = 0,
                     className,
                 }: ArcRingProps) {
    const radius = ARC_RADIUS + radiusOffset;

    return (
        <div
            className={`absolute top-1/2 rounded-full border ${
                className ?? ''
            }`}
            style={{
                width: radius * 2,
                height: radius * 2,
                left: ARC_CENTER_X - radius,
                transform: 'translateY(-50%)',
            }}
        />
    );
}

function SocialButton({
                          href,
                          label,
                          angle,
                          icon,
                      }: SocialLink) {
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
            className="pointer-events-auto absolute flex h-[64px] w-[64px] items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition-all duration-500 hover:scale-110 hover:border-slate-900 hover:bg-[#22242f] hover:text-white dark:border-slate-600 dark:bg-[#22242f] dark:text-white dark:shadow-lg dark:hover:border-white dark:hover:bg-white dark:hover:text-[#22242f]"
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
            <ArcRing className="border-slate-300/80 dark:border-slate-500/45" />

            <ArcRing
                radiusOffset={105}
                className="border-slate-300/50 dark:border-slate-600/25"
            />

            <ArcRing
                radiusOffset={-100}
                className="border-slate-300/60 dark:border-slate-600/30"
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

function MovingOrbits() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Large orbit */}
            <div className="absolute -right-[250px] top-[80px] h-[720px] w-[720px] rounded-full border border-slate-300/60 dark:border-slate-500/15 motion-safe:animate-[spin_35s_linear_infinite]">
                <span className="absolute left-1/2 top-[-5px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-slate-500/50 dark:bg-slate-400/50" />
            </div>

            {/* Medium orbit */}
            <div className="absolute -right-[130px] top-[200px] h-[480px] w-[480px] rounded-full border border-slate-300/70 dark:border-slate-500/20 motion-safe:animate-[spinReverse_26s_linear_infinite]">
                <span className="absolute right-[35px] top-[80px] h-2 w-2 rounded-full bg-slate-600/60 dark:bg-white/50" />
            </div>

            {/* Small orbit */}
            <div className="absolute right-[140px] top-[300px] h-[250px] w-[250px] rounded-full border border-slate-300/60 dark:border-slate-600/20 motion-safe:animate-[spin_18s_linear_infinite]">
                <span className="absolute bottom-[20px] left-[55px] h-[6px] w-[6px] rounded-full bg-slate-500/50 dark:bg-slate-300/50" />
            </div>
        </div>
    );
}

function BackgroundDecorations() {
    return (
        <>
            <div className="pointer-events-none absolute -bottom-[400px] -left-[400px] h-[900px] w-[900px] rounded-full border border-slate-300/50 dark:border-slate-600/25 motion-safe:animate-[backgroundFloat_10s_ease-in-out_infinite]" />

            <div className="pointer-events-none absolute -bottom-[500px] -left-[500px] h-[1150px] w-[1150px] rounded-full border border-slate-300/40 dark:border-slate-600/20 motion-safe:animate-[backgroundFloatReverse_14s_ease-in-out_infinite]" />

            {/* Floating glow */}
            <div className="pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-amber-500/[0.04] blur-2xl motion-safe:animate-[floatingGlow_7s_ease-in-out_infinite] dark:bg-white/[0.015]" />

            <div className="pointer-events-none absolute bottom-[15%] right-[20%] h-56 w-56 rounded-full bg-slate-500/[0.04] blur-3xl motion-safe:animate-[floatingGlow_10s_ease-in-out_infinite] dark:bg-slate-300/[0.02]" />

            <MovingOrbits />
        </>
    );
}

function HeroTitle() {
    return (
        <div className="relative inline-block">
            <h1 className="whitespace-nowrap font-serif text-[58px] leading-[0.95] tracking-[-0.04em] text-[#22242f] motion-safe:animate-[heroTitle_900ms_cubic-bezier(0.16,1,0.3,1)_both] sm:text-[72px] md:text-[88px] lg:text-[92px] xl:text-[112px] dark:text-[#f7f7f8]">
                Saharsha Bhatta
            </h1>

            <svg
                viewBox="0 0 300 40"
                fill="none"
                className="absolute -bottom-10 right-[2%] h-10 w-[48%] origin-left text-slate-400 motion-safe:animate-[underlineReveal_1.2s_ease-out_500ms_both] dark:text-slate-500/60"
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

                <p className="mt-24 max-w-[540px] text-[18px] font-light leading-relaxed text-slate-600 motion-safe:animate-[fadeUp_900ms_ease-out_300ms_both] md:text-[21px] dark:text-slate-400">
                    Full Stack Developer specializing in Laravel
                    and React.
                </p>

                <a
                    href="#resume"
                    className="mt-16 inline-flex h-[96px] min-w-[380px] items-center justify-center gap-5 rounded-full border border-slate-800 bg-[#22242f] px-10 text-[18px] font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg motion-safe:animate-[fadeUp_900ms_ease-out_500ms_both] dark:border-slate-600/70 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-[#22242f]"
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
            {/*
                Add your image:

                <img
                    src="/images/saharsha.png"
                    alt="Saharsha Bhatta"
                    className="h-[580px] w-full object-contain object-bottom sm:h-[680px] lg:h-full lg:min-h-[760px]"
                />
            */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4f2ed]/80 to-transparent dark:from-[#22242f]/60" />
        </div>
    );
}

function HeroVisual() {
    return (
        <div className="relative mt-12 flex items-end justify-center lg:col-span-7 lg:mt-0 lg:h-full lg:justify-start motion-safe:animate-[heroVisual_1.2s_cubic-bezier(0.16,1,0.3,1)_200ms_both]">
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
            className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:border-white dark:hover:text-white"
        >
            <ChevronUp className="h-5 w-5" />
        </button>
    );
}

export default function Hero() {
    return (
        <>
            <style>
                {`
                    @keyframes heroTitle {
                        from {
                            opacity: 0;
                            transform: translateY(70px);
                            filter: blur(8px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                            filter: blur(0);
                        }
                    }

                    @keyframes heroVisual {
                        from {
                            opacity: 0;
                            transform: translateX(80px) scale(0.96);
                        }

                        to {
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                    }

                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(35px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes underlineReveal {
                        from {
                            opacity: 0;
                            transform: scaleX(0);
                        }

                        to {
                            opacity: 1;
                            transform: scaleX(1);
                        }
                    }

                    @keyframes spinReverse {
                        from {
                            transform: rotate(360deg);
                        }

                        to {
                            transform: rotate(0deg);
                        }
                    }

                    @keyframes backgroundFloat {
                        0%,
                        100% {
                            transform: translate3d(0, 0, 0);
                        }

                        50% {
                            transform: translate3d(35px, -25px, 0);
                        }
                    }

                    @keyframes backgroundFloatReverse {
                        0%,
                        100% {
                            transform: translate3d(0, 0, 0);
                        }

                        50% {
                            transform: translate3d(-30px, 35px, 0);
                        }
                    }

                    @keyframes floatingGlow {
                        0%,
                        100% {
                            transform: translateY(0) scale(1);
                            opacity: 0.4;
                        }

                        50% {
                            transform: translateY(-30px) scale(1.15);
                            opacity: 1;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        *,
                        *::before,
                        *::after {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                        }
                    }
                `}
            </style>

            <main
                id="home"
                className="relative min-h-screen w-full overflow-hidden bg-[#f4f2ed] text-[#22242f] transition-colors duration-500 dark:bg-[#22242f] dark:text-white"
            >
                <BackgroundDecorations />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1700px] flex-col px-6 md:px-10 lg:px-14 xl:px-16">
                    <section className="grid flex-1 grid-cols-1 items-center lg:grid-cols-12">
                        <HeroContent />

                        <HeroVisual />
                    </section>

                    <div className="relative z-40 flex justify-end pb-8">
                        <ScrollToTopButton />
                    </div>
                </div>
            </main>
        </>
    );
}
