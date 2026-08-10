import { LucideIcon, Palette, Store, UtensilsCrossed } from 'lucide-react';

export interface UmkmStatItem {
	id: string;
	category: string;
	value: string | number;
	label: string;
	description: string;
	icon: LucideIcon;
	trend?: {
		value: string;
		isPositive: boolean;
	};
}

export const umkmStatsData: UmkmStatItem[] = [
	{
		id: 'total-umkm',
		category: 'Sektor Usaha',
		value: '50+',
		label: 'Total UMKM',
		description: 'Pelaku usaha terdata di desa',
		icon: Store,
		trend: {
			value: '12% bulan ini',
			isPositive: true,
		},
	},
	{
		id: 'kuliner',
		category: 'Kategori Usaha',
		value: '25+',
		label: 'Kuliner',
		description: 'Makanan & minuman olahan lokal',
		icon: UtensilsCrossed,
	},
	{
		id: 'kerajinan',
		category: 'Kategori Usaha',
		value: '10+',
		label: 'Kerajinan',
		description: 'Produk olahan tangan & seni',
		icon: Palette,
	},
];


export interface umkmStatCategory {
	id: string
	name: umkmStatCategory
	value: number
}

export const umkmStatCategory = {
	
}