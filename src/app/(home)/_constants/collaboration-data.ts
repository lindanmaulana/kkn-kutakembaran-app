interface Collaboration {
	id: string;
	name: string;
	imageUrl: string;
	websiteUrl?: string;
}

export const COLLABORATIONS_DATA: Collaboration[] = [
	{
		id: 'collab-1',
		name: 'Politeknik Kesehatan KMC',
		imageUrl: '/assets/images/collaborations/logo-polteknes-kmc.png',
		websiteUrl: 'https://poltekeskmc.ac.id/',
	},
	{
		id: 'collab-2',
		name: 'STAIKU',
		imageUrl: '/assets/images/collaborations/logo-staiku.png',
		websiteUrl: 'https://staiku.ac.id/',
	},
	{
		id: 'collab-3',
		name: 'Universitas Bhakti Husada Indonesia',
		imageUrl: '/assets/images/collaborations/logo-ubhi.png',
		websiteUrl: 'https://univ-bhi.ac.id/',
	},
	{
		id: 'collab-4',
		name: 'Universitas Muhammadiyah Kuningan',
		imageUrl: '/assets/images/collaborations/logo-umk.png',
		websiteUrl: 'https://umkuningan.ac.id/',
	},
	{
		id: 'collab-5',
		name: 'Universitas Islam Al-Ihya Kuningan',
		imageUrl: '/assets/images/collaborations/logo-unisa.png',
		websiteUrl: 'https://unisa.ac.id/',
	},
	{
		id: 'collab-6',
		name: 'Universitas Kuningan',
		imageUrl: '/assets/images/collaborations/logo-uniku.png',
		websiteUrl: 'https://uniku.ac.id/',
	},
];
