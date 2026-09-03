import React, { ReactNode, useCallback } from 'react';
import { ChevronUp, Download, Globe } from 'lucide-react';
import { FacebookIcon } from '@/Components/svg/FacebookIcon';
import { DribbbleIcon } from '@/Components/svg/DribbbleIcon';
import { LinkedinIcon } from '@/Components/svg/LinkedinIcon';
import { GithubIcon } from '@/Components/svg/GithubIcon';
import { InstagramIcon } from '@/Components/svg/InstagramIcon';
import { ProfileSetting } from '@/types';

interface SocialLinkItem {
    href: string;
    label: string;
    angle: number;
    icon: ReactNode;
}

const DEFAULT_SOCIAL_LINKS: SocialLinkItem[] = [
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
        href: 'https://linkedin.com',
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

function ArcRing({ radiusOffset = 0, className }: ArcRingProps) {
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

function SocialButton({ href, label, angle, icon }: SocialLinkItem) {
    const radians = (angle * Math.PI) / 180;

    const x = ARC_CENTER_X + ARC_RADIUS * Math.cos(radians);
    const y = ARC_RADIUS * Math.sin(radians);

    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className="pointer-events-auto absolute flex h-[64px] w-[64px] items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-md backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:hover:border-blue-500 dark:hover:bg-blue-500"
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

function getPlatformIcon(platform: string): ReactNode {
    const p = platform.toLowerCase();
    if (p.includes('facebook')) return <FacebookIcon className="h-5 w-5" />;
    if (p.includes('dribbble')) return <DribbbleIcon className="h-5 w-5" />;
    if (p.includes('behance')) return <span className="text-[18px] font-semibold">Bē</span>;
    if (p.includes('linkedin')) return <LinkedinIcon className="h-5 w-5" />;
    if (p.includes('github')) return <GithubIcon className="h-5 w-5" />;
    if (p.includes('instagram')) return <InstagramIcon className="h-5 w-5" />;
    return <Globe className="h-5 w-5" />;
}

function SocialArc({ profile }: { profile?: ProfileSetting }) {
    let socialItems: SocialLinkItem[] = DEFAULT_SOCIAL_LINKS;

    if (profile?.social_links && profile.social_links.length > 0) {
        const angles = [-58, -28, 0, 34, 60, -80];
        socialItems = profile.social_links.map((s, idx) => ({
            href: s.url,
            label: s.platform || s.handle,
            angle: angles[idx % angles.length],
            icon: getPlatformIcon(s.platform),
        }));
    }

    return (
        <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
            <ArcRing className="border-slate-300/80 dark:border-slate-700/60" />

            <ArcRing
                radiusOffset={105}
                className="border-slate-300/50 dark:border-slate-800/40"
            />

            <ArcRing
                radiusOffset={-100}
                className="border-slate-300/60 dark:border-slate-800/60"
            />

            {socialItems.map((social) => (
                <SocialButton key={social.label + social.href} {...social} />
            ))}
        </div>
    );
}

function MovingOrbits() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Large orbit */}
            <div className="absolute -right-[250px] top-[80px] h-[720px] w-[720px] rounded-full border border-slate-300/60 motion-safe:animate-[spin_35s_linear_infinite] dark:border-slate-800/50">
                <span className="absolute left-1/2 top-[-5px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-blue-500/50 dark:bg-blue-400/50" />
            </div>

            {/* Medium orbit */}
            <div className="absolute -right-[130px] top-[200px] h-[480px] w-[480px] rounded-full border border-slate-300/70 motion-safe:animate-[spinReverse_26s_linear_infinite] dark:border-slate-800/60">
                <span className="absolute right-[35px] top-[80px] h-2 w-2 rounded-full bg-indigo-500/60 dark:bg-indigo-400/50" />
            </div>

            {/* Small orbit */}
            <div className="absolute right-[140px] top-[300px] h-[250px] w-[250px] rounded-full border border-slate-300/60 motion-safe:animate-[spin_18s_linear_infinite] dark:border-slate-800/50">
                <span className="absolute bottom-[20px] left-[55px] h-[6px] w-[6px] rounded-full bg-teal-500/50 dark:bg-teal-400/50" />
            </div>
        </div>
    );
}

function BackgroundDecorations() {
    return (
        <>
            <div className="pointer-events-none absolute -bottom-[400px] -left-[400px] h-[900px] w-[900px] rounded-full border border-slate-300/50 motion-safe:animate-[backgroundFloat_10s_ease-in-out_infinite] dark:border-slate-800/40" />

            <div className="pointer-events-none absolute -bottom-[500px] -left-[500px] h-[1150px] w-[1150px] rounded-full border border-slate-300/40 motion-safe:animate-[backgroundFloatReverse_14s_ease-in-out_infinite] dark:border-slate-800/30" />

            {/* Ambient Soft Glows */}
            <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] motion-safe:animate-[floatingGlow_7s_ease-in-out_infinite] dark:bg-indigo-500/15" />

            <div className="pointer-events-none absolute bottom-[15%] right-[20%] h-80 w-80 rounded-full bg-teal-500/10 blur-[120px] motion-safe:animate-[floatingGlow_10s_ease-in-out_infinite] dark:bg-emerald-500/10" />

            <MovingOrbits />
        </>
    );
}

function HeroTitle({ prefix = 'Saharsha', highlight = 'Bhatta' }: { prefix?: string; highlight?: string }) {
    return (
        <div className="relative inline-block">
            <h1 className="whitespace-nowrap font-sans text-[54px] font-extrabold leading-[0.95] tracking-tight text-slate-900 motion-safe:animate-[heroTitle_900ms_cubic-bezier(0.16,1,0.3,1)_both] sm:text-[72px] md:text-[88px] lg:text-[92px] xl:text-[112px] dark:text-white">
                {prefix}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                    {highlight}
                </span>
            </h1>

            <svg
                viewBox="0 0 300 40"
                fill="none"
                className="absolute -bottom-10 right-[2%] h-10 w-[48%] origin-left text-blue-600/70 motion-safe:animate-[underlineReveal_1.2s_ease-out_500ms_both] dark:text-blue-400/70"
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

function HeroContent({ profile }: { profile?: ProfileSetting }) {
    const headline = profile?.headline || 'Full Stack Developer specializing in Laravel and React.';
    const resumeUrl = profile?.resume_url || '#resume';

    return (
        <div className="relative z-20 pt-16 lg:col-span-5 lg:pt-0">
            <div className="max-w-[700px]">
                <HeroTitle
                    prefix={profile?.title_prefix || 'Saharsha'}
                    highlight={profile?.title_highlight || 'Bhatta'}
                />

                <p className="mt-20 max-w-[540px] text-lg font-normal leading-relaxed text-slate-600 motion-safe:animate-[fadeUp_900ms_ease-out_300ms_both] md:text-xl dark:text-slate-300">
                    {headline}
                </p>

                <a
                    href={resumeUrl}
                    target={resumeUrl.startsWith('http') || resumeUrl.startsWith('/storage') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group mt-12 inline-flex h-16 min-w-[280px] items-center justify-center gap-4 rounded-2xl bg-slate-900 px-8 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg motion-safe:animate-[fadeUp_900ms_ease-out_500ms_both] dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                    <span>Get Resume</span>
                    <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
            </div>
        </div>
    );
}

function HeroImage({ avatarImage }: { avatarImage?: string }) {
    return (
        <div className="relative z-10 h-full w-full lg:w-[calc(100%_-_240px)] flex items-end justify-center">
            {avatarImage ? (
                <img
                    src={avatarImage}
                    alt="Hero Avatar"
                    className="h-[520px] sm:h-[620px] lg:h-[720px] w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
                />
            ) : (
                <div className="h-[400px] w-full" />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8f9fa] to-transparent dark:from-[#0d0f17]" />
        </div>
    );
}

function HeroVisual({ profile }: { profile?: ProfileSetting }) {
    return (
        <div className="relative mt-12 flex items-end justify-center lg:col-span-7 lg:mt-0 lg:h-full lg:justify-start motion-safe:animate-[heroVisual_1.2s_cubic-bezier(0.16,1,0.3,1)_200ms_both]">
            <div className="relative w-full max-w-[860px] lg:-ml-8 lg:h-screen lg:max-h-[900px] xl:-ml-14">
                <HeroImage avatarImage={profile?.avatar_image} />

                <div className="absolute bottom-0 right-0 top-0 z-20 hidden w-[240px] lg:block">
                    <SocialArc profile={profile} />
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
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-900/80 dark:hover:text-white"
        >
            <ChevronUp className="h-5 w-5" />
        </button>
    );
}

export default function Hero({ profile }: { profile?: ProfileSetting }) {
    return (
        <>
            <style>
                {`
                    @keyframes heroTitle {
                        from {
                            opacity: 0;
                            transform: translateY(30px) scale(0.98);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
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

                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(24px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes heroVisual {
                        from {
                            opacity: 0;
                            transform: translateY(40px) scale(0.96);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    @keyframes floatingGlow {
                        0%, 100% {
                            transform: translate(0, 0) scale(1);
                            opacity: 0.6;
                        }
                        50% {
                            transform: translate(25px, -35px) scale(1.15);
                            opacity: 0.9;
                        }
                    }

                    @keyframes backgroundFloat {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        50% {
                            transform: translate(-30px, -40px) rotate(4deg);
                        }
                    }

                    @keyframes backgroundFloatReverse {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        50% {
                            transform: translate(40px, -25px) rotate(-4deg);
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
                `}
            </style>

            <section
                id="hero"
                className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f8f9fa] pt-20 transition-colors duration-500 lg:pt-0 dark:bg-[#0d0f17]"
            >
                <BackgroundDecorations />

                <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12">
                    <div className="grid grid-cols-1 items-center lg:min-h-screen lg:grid-cols-12">
                        <HeroContent profile={profile} />
                        <HeroVisual profile={profile} />
                    </div>
                </div>

                <div className="absolute bottom-8 right-6 z-30 hidden sm:block md:right-10 lg:right-12">
                    <ScrollToTopButton />
                </div>
            </section>
        </>
    );
}
