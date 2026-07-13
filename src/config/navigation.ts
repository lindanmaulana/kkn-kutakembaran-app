interface links {
	label: string;
	href: string;
}

interface navbarLinks extends links {
	children?: links[];
}

export const navbarLinks: navbarLinks[] = [
	{
		label: 'Beranda',
		href: '/',
	},
	{
		label: 'Profile',
		href: '/profile',
		children: [
			{
				label: 'Anggota KKN',
				href: '/team',
			},
			{
				label: 'Visi Misi',
				href: '/vision-mission',
			},
			{
				label: 'Arti Logo',
				href: '/logo-meaning',
			},
		],
	},
	{
		label: 'Berita',
		href: '/news',
	},
	{
		label: 'Info Grafis',
		href: '/infographic',
	},
	{
		label: 'Juknis',
		href: '/juknis',
	},
	{
		label: 'FAQ',
		href: '/faq',
	},
];
