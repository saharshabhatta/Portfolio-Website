export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    handle: string;
    icon?: string;
    order?: number;
}

export interface ProfileSetting {
    id?: number;
    full_name: string;
    title_prefix: string;
    title_highlight: string;
    headline: string;
    sub_headline?: string;
    about_heading?: string;
    about_intro?: string;
    about_description?: string;
    email: string;
    phone?: string;
    location: string;
    availability_status: string;
    is_available_for_hire: boolean;
    resume_url?: string;
    avatar_image?: string;
    experience_badge_label?: string;
    experience_badge_value?: string;
    focus_badge_label?: string;
    focus_badge_value?: string;
    tech_stack_tags?: string[];
    social_links?: SocialLink[];
    created_at?: string;
    updated_at?: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    type: string;
    description: string;
    content?: string;
    stack?: string[];
    highlights?: string[];
    icon?: string;
    image?: string;
    link?: string;
    github_link?: string;
    order: number;
    is_featured: boolean;
    is_published: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    location?: string;
    skills?: string[];
    description: string;
    icon?: string;
    order: number;
    is_published: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    year: string;
    focus: string;
    link?: string;
    image?: string;
    order: number;
    is_published: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface Skill {
    id: number;
    skill_category_id: number;
    name: string;
    description?: string;
    proficiency?: number;
    order: number;
    created_at?: string;
    updated_at?: string;
}

export interface SkillCategory {
    id: number;
    number: string;
    title: string;
    subtitle?: string;
    icon?: string;
    order: number;
    skills?: Skill[];
    created_at?: string;
    updated_at?: string;
}

export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    subject?: string;
    message: string;
    ip_address?: string;
    is_read: boolean;
    read_at?: string;
    created_at: string;
    updated_at?: string;
}

export interface FlashMessages {
    success?: string | null;
    error?: string | null;
    message?: string | null;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    flash?: FlashMessages;
    siteProfile?: ProfileSetting;
    unreadMessagesCount?: number;
};
