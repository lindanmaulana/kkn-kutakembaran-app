import { Building2, LucideIcon, MapPin, Sprout, Users } from 'lucide-react';

export interface VillageOverviewItem {
	id: string;
	category: string;
	title: string;
	subtitle: string;
	badgeText?: string;
	icon: LucideIcon;
}

export const villageOverviewData: VillageOverviewItem[] = [
	{
		id: 'wilayah',
		category: 'Wilayah',
		title: 'Desa Kutakembaran',
		subtitle: 'Kecamatan Garawangi',
		badgeText: 'Kuningan',
		icon: Building2,
	},
	{
		id: 'masyarakat',
		category: 'Masyarakat',
		title: 'Masyarakat Lokal',
		subtitle: 'Ramah & Gotong Royong',
		badgeText: 'Demografi',
		icon: Users,
	},
	{
		id: 'potensi',
		category: 'Potensi',
		title: 'Pertanian & UMKM',
		subtitle: 'Komoditas & Produk Lokal',
		badgeText: 'Ekonomi',
		icon: Sprout,
	},
	{
		id: 'kabupaten',
		category: 'Kabupaten',
		title: 'Kuningan',
		subtitle: 'Provinsi Jawa Barat',
		badgeText: 'Jabar',
		icon: MapPin,
	},
];
