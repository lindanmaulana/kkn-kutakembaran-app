export enum NewsCategory {
	VILLAGE = 'Kabar Desa',
	NEWS = 'Berita',
	ANNOUNCEMENT = 'Pengumuman',
	ARTICLE = 'Artikel',
	DOCUMENTATION = 'Dokumentasi',
	PRESS_RELEASE = 'Siaran Pers',
}

export interface News {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	content?: string;
	date: string;
	imageUrl: string;
	category: NewsCategory;
	author: string;
	isFeatured: boolean;
}

export const NEWS_DATA: News[] = [
	{
		id: '1',
		title: 'Rapat Pleno Pembahasan Proker: Pemetaan Sektor Pendidikan dan Kesehatan',
		slug: 'rapat-pleno-pembahasan-proker-pendidikan-kesehatan',
		excerpt:
			'Forum formal yang dihadiri oleh seluruh divisi untuk memaparkan rencana bimbingan belajar gratis serta posyandu remaja yang akan diimplementasikan di desa mitra...',
		date: '13 Juli 2026',
		imageUrl: '/assets/images/news/kkn-rapat-proker.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '2',
		title: 'Acara Pelepasan Mahasiswa KKN Kolaboratif Bersama Bupati Kuningan dan Rektor 6 Perguruan Tinggi',
		slug: 'acara-pelepasan-mahasiswa-kkn-kolaboratif-bupati-kuningan-rektor',
		excerpt:
			'Momentum pelepasan resmi seluruh delegasi mahasiswa KKN Kolaboratif oleh Bupati Kuningan bersama Rektor dari 6 perguruan tinggi di Kabupaten Kuningan. Dalam program ini, mahasiswa disebar di 5 desa di Kecamatan Cigugur, yaitu Pakembangan, Cirukem, Gewok, Kadatuan, dan Kuta Kembaran untuk memulai masa pengabdian...',
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pelepasan.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},
];
