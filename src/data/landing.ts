// Centralized landing page data so content can be updated without touching layout components.
export interface NavItem {
    label: string;
    href: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    ctaLabel: string;
    ctaHref: string;
    theme: "light" | "dark";
}

export interface BlogItem {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
}

export const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Client Love", href: "#client-love" },
	{ label: "Open Pass", href: "#services" },
	{ label: "Support Press", href: "#guidance" },
];

export const heroData = {
	image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/15ab9d87-33f3-464d-b52e-a00a9e0938e7/woman-against-terracotta-wall.jpeg?format=2500w",
    imageAlt: "Woman with flowing dark hair in earthy outdoor scene",
    title: "Where Presence Becomes Your Most Powerful Practice",
    description:
        "Deeply present one-on-one sessions designed to help women feel grounded, clear, and aligned in body, mind, and spirit.",
    ctaLabel: "Book a Clarity Call",
    ctaHref: "#book",
};

export const coachingData = {
	image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/352a9a1e-28b5-4a4c-ac44-9ce205c6cc59/meditation-cushion.jpeg?format=1000w",
    imageAlt: "Warm interior with cushion and natural sunlight",
    title: "Holistic health coaching and slow-living support for women.",
    description:
        "I support women in reconnecting with their body wisdom, calming their nervous system, and cultivating grounded habits that sustain long-term wellbeing.",
    secondary:
        "Together, we map simple rituals for nourishment, movement, and mindfulness so your everyday life feels more intentional and spacious.",
};

export const servicesIntro = {
    title: "Holistic Health Coaching Programs to Meet You Exactly Where You Are",
    description:
        "From private coaching to seasonal resets, each offering supports the same intention: helping you return to your body and your values.",
};

export const services: ServiceItem[] = [
    {
        id: "seasonal-reset",
        title: "The Seasonal Reset",
        description:
            "Targeted support sessions for women navigating life transitions with gentle structure and accountability.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/aac4dabd-94d7-4b56-8b02-4a7941972fe1/woman-in-beige-yoga-clothes-stretching.jpeg?format=750w",
        imageAlt: "Woman stretching with pottery in warm room",
        ctaLabel: "Open Your Seat",
        ctaHref: "#book",
        theme: "light",
    },
    {
        id: "wellness-method",
        title: "The Wellness Method",
        description:
            "A guided six-session framework that combines coaching, nervous-system care, and practical daily rituals.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/9bd99cfa-13e8-4c4e-96dd-a906ed4a0693/snake-plant.jpeg?format=750w",
        imageAlt: "Green leaves with sunlight and earthy tones",
        ctaLabel: "Explore The Method",
        ctaHref: "#book",
        theme: "dark",
    },
    {
        id: "vip-day",
        title: "VIP Day",
        description:
            "A private deep-dive day to reset your routines, refine your goals, and leave with a custom wellbeing blueprint.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/562108d9-4f2a-4ee9-a647-dbab3e2a16e9/happy-woman-looking-over-shoulder.jpeg?format=750w",
        imageAlt: "Woman outdoors in white clothing with natural light",
        ctaLabel: "Book Your VIP Day",
        ctaHref: "#book",
        theme: "light",
    },
];

export const approachItems = [
    { title: "Nutrition" },
    { title: "Movement" },
    { title: "Meditation" },
];

export const testimonial = {
    quote: "I stopped doing plans and started building habits that actually fit my life. I finally feel grounded, and my energy is steady from week to week.",
    author: "— past client",
};

export const guidanceData = {
    title: "Grounded Support & Guidance for Your Authentic Self",
    description:
        "Thoughtful articles, practical tools, and holistic insights to help you create routines that feel nourishing and realistic.",
    ctaLabel: "Explore The Blog",
    ctaHref: "#guidance",
};

export const blogItems: BlogItem[] = [
    {
        title: "How to Build a Wellness Routine That Works",
        description:
            "Practical weekly rhythm ideas for women balancing work, family, and self-care.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/170b083a-3b72-40c2-91a0-2cac84697a3a/dry-brush-and-body-oil.jpeg?format=300w",
        imageAlt: "Dropper bottle and herbs on a light textile",
        href: "#guidance",
    },
    {
        title: "5 Mindful Movement Practices to Feel More Present",
        description:
            "Gentle movement rituals to calm the mind and support your nervous system.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/e8d6be15-75b2-47b5-9259-c48ce9529118/hands-over-chest.jpeg?format=300w",
        imageAlt: "Hands resting over torso in calming neutral palette",
        href: "#guidance",
    },
    {
        title: "Top 3 Daily Habits for Balanced Energy",
        description:
            "Simple practices to move through your day with steadier focus and less overwhelm.",
		image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/65c36eb8-9878-4ac8-a05b-13fbabb714f7/healthy-dinner.jpeg?format=300w",
        imageAlt: "Colorful meal bowl with fresh ingredients",
        href: "#guidance",
    },
];

export const footerBannerData = {
    title: "Download the Mindful Mini Guide",
    description:
        "A practical guide to help you build calm routines and reconnect with your body in everyday moments.",
    ctaLabel: "Download The Planner",
    ctaHref: "#",
	image: "https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/7a912871-f75f-44c4-afde-a8a9f5e4a36e/woman-against-terracotta-wall.jpg",
    imageAlt: "Close-up portrait with earthy styling",
};

export const footerData = {
	name: "GlowHaus Beauty Salon",
	founder: "Sally Alchemist · Founder",
	email: "maya@glowhaus.test",
	instagram: "@glowhaus_saloon",
};
