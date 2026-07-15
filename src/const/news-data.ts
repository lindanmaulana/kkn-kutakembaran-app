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

	{
		id: '3',
		title: 'Bangun Kedekatan Sejak Dini, Mahasiswa KKN Kolaboratif Lakukan Kegiatan Saba Desa di Kuta Kembaran',
		slug: 'bangun-kedekatan-sejak-dini-mahasiswa-kkn-kolaboratif-saba-desa-kuta-kembaran',
		excerpt:
			'Guna menciptakan hubungan yang erat dengan warga setempat, mahasiswa KKN Kolaboratif di Desa Kuta Kembaran menggelar aksi Saba Desa. Kegiatan pengenalan lingkungan ini diwarnai dengan interaksi hangat bersama anak-anak dan tokoh masyarakat...',
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-saba-desa.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '4',
		title: 'Langkah Awal KKN Kolaboratif: Bangun Kedekatan Lewat Interaksi Hangat Bersama Anak-Anak Desa Kuta Kembaran',
		slug: 'langkah-awal-kkn-kolaboratif-bangun-kedekatan-anak-desa-kuta-kembaran',
		excerpt:
			'Mengawali masa pengabdian dengan pendekatan yang humanis, mahasiswa KKN Kolaboratif berbaur dan berbagi keceriaan bersama anak-anak di Desa Kuta Kembaran. Langkah awal ini dilakukan untuk menciptakan hubungan emosional yang erat dengan warga sekitar sejak hari pertama...',
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pendekatan-anak.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '5',
		title: 'Pererat Tali Silaturahmi, Mahasiswa KKN Kolaboratif Ikuti Kegiatan Keagamaan Bersama Warga Kuta Kembaran',
		slug: 'pererat-tali-silaturahmi-mahasiswa-kkn-kolaboratif-kegiatan-keagamaan-warga',
		excerpt:
			'Sebagai upaya memperkuat nilai religius dan kedekatan sosial, mahasiswa KKN Kolaboratif berbaur bersama jamaah dan tokoh masyarakat Desa Kuta Kembaran dalam kegiatan keagamaan rutin. Momen hangat ini diakhiri dengan diskusi santai mengenai program kerja di teras masjid...',
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-silaturahmi-masjid.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},
];
