// Centralized content for the About page to keep copy and media separate from layout components.
export interface RhythmItem {
	id: string;
	image: string;
	imageAlt: string;
	number: string;
	text: string;
	theme: 'light' | 'dark';
}

export interface WorkItem {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	ctaLabel: string;
	ctaHref: string;
}

export const aboutHeroData = {
	label: 'Meet Sally',
	title: 'I help intentional women build sustainable nutrition and lifestyle rhythms.',
	description:
		'Mind-body rooted support for women who want practical wellness rituals they can actually maintain in real life.',
	image:
		'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/15ab9d87-33f3-464d-b52e-a00a9e0938e7/woman-against-terracotta-wall.jpeg?format=1200w',
	imageAlt: 'Portrait of Sally with warm neutral styling'
};

export const missionData = {
	left:
		'Helping you create a wellness rhythm that feels sustainable through nourishment, mindful living, and gentle movement.',
	rightLabel: 'My Mission',
	right:
		'Wellness should feel supportive, not strict. I help women create realistic routines that reduce overwhelm and build long-term steadiness.'
};

export const meetData = {
	label: 'Meet Sally',
	title: 'Grounded, mindful nutrition coaching for women who want to live a more peaceful life.',
	description:
		'I combine practical nutrition support with mindful lifestyle coaching so you can feel clear, nourished, and consistent without all-or-nothing pressure.',
	image:
		'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/15ab9d87-33f3-464d-b52e-a00a9e0938e7/woman-against-terracotta-wall.jpeg?format=1100w',
	imageAlt: 'Sally seated cross legged in studio'
};

export const aboutQuoteData = {
	image:
		'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/aac4dabd-94d7-4b56-8b02-4a7941972fe1/woman-in-beige-yoga-clothes-stretching.jpeg?format=1800w',
	imageAlt: 'Warm textured background for testimonial',
	quote:
		'I stopped chasing plans and started building habits that actually feel natural. Everything feels simpler now, and my energy is steady.',
	author: '— happy client'
};

export const credentialsData = {
	label: 'My Credentials',
	title: 'Trained in holistic nutrition with a practical approach you can actually use.',
	copy:
		'Family foundations around food and body awareness, translated into simple systems you can use at home.',
	items: ['Your credential goes here', 'Your credential goes here', 'Your credential goes here'],
	image:
		'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/352a9a1e-28b5-4a4c-ac44-9ce205c6cc59/meditation-cushion.jpeg?format=1200w',
	imageAlt: 'Hands holding tea cup in cozy setting'
};

export const rhythmsIntro = {
	title: 'My Personal Rhythms',
	description: 'A few things that make me, me, and probably explain why my work feels this way.'
};

export const rhythmItems: RhythmItem[] = [
	{
		id: 'morning',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/170b083a-3b72-40c2-91a0-2cac84697a3a/dry-brush-and-body-oil.jpeg?format=1200w',
		imageAlt: 'Natural linen and salt bowl still life',
		number: '01',
		text: 'Slow mornings are non-negotiable. I begin with tea, sunlight, and a few grounding minutes before screens.',
		theme: 'light'
	},
	{
		id: 'movement',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/9bd99cfa-13e8-4c4e-96dd-a906ed4a0693/snake-plant.jpeg?format=1200w',
		imageAlt: 'Woman practicing yoga pose in studio',
		number: '02',
		text: 'Movement for me is about feeling steady in my body. I choose what restores energy, not what burns me out.',
		theme: 'dark'
	},
	{
		id: 'food',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/65c36eb8-9878-4ac8-a05b-13fbabb714f7/healthy-dinner.jpeg?format=1200w',
		imageAlt: 'Nourishing bowl meal with vegetables',
		number: '03',
		text: 'I am a little obsessed with simple, nourishing meals. My favorite kind of healthy is food that tastes good and feels good.',
		theme: 'light'
	},
	{
		id: 'nature',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/562108d9-4f2a-4ee9-a647-dbab3e2a16e9/happy-woman-looking-over-shoulder.jpeg?format=1200w',
		imageAlt: 'Woman in natural desert landscape',
		number: '04',
		text: 'Nature is where I reconnect. Desert light, open sky, and fresh air help me return to myself quickly.',
		theme: 'dark'
	}
];

export const workItems: WorkItem[] = [
	{
		title: 'The Seasonal Reset',
		description: 'Supportive coaching sessions for gentle seasonal rhythm support.',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/aac4dabd-94d7-4b56-8b02-4a7941972fe1/woman-in-beige-yoga-clothes-stretching.jpeg?format=700w',
		imageAlt: 'Woman stretching with arms raised',
		ctaLabel: 'Start Your Reset',
		ctaHref: '#book'
	},
	{
		title: 'The Mindful Method',
		description: 'Step-by-step coaching framework for sustainable lifestyle rhythms.',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/65c36eb8-9878-4ac8-a05b-13fbabb714f7/healthy-dinner.jpeg?format=700w',
		imageAlt: 'Healthy dish on neutral table',
		ctaLabel: 'Explore The Method',
		ctaHref: '#book'
	},
	{
		title: '90 Min Deep Dive',
		description: 'Targeted support session to clear overwhelm and align your next steps.',
		image:
			'https://images.squarespace-cdn.com/content/v1/69b70347db6c0a4537df6043/562108d9-4f2a-4ee9-a647-dbab3e2a16e9/happy-woman-looking-over-shoulder.jpeg?format=700w',
		imageAlt: 'Woman looking over shoulder outdoors',
		ctaLabel: 'Book Your Deep Dive',
		ctaHref: '#book'
	}
];
