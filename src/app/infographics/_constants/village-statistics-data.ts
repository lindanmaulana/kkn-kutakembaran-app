import { LucideIcon, Map, MapPinned, Users } from 'lucide-react';

export interface VillageStatisticItem {
	id: string;
	value: string | number;
	label: string;
	category?: string;
	description?: string;
	icon: LucideIcon;
}

export const villageStatisticsData: VillageStatisticItem[] = [
	{
		id: 'dusun',
		value: 3,
		label: 'Dusun',
		category: 'Wilayah',
		description: 'Pembagian wilayah administratif',
		icon: MapPinned,
	},
	{
		id: 'rt',
		value: '-',
		label: 'RT',
		category: 'Wilayah',
		description: 'Rukun Tetangga',
		icon: Map,
	},
	{
		id: 'rw',
		value: '-',
		label: 'RW',
		category: 'Wilayah',
		description: 'Rukun Warga',
		icon: Map,
	},
	{
		id: 'population',
		value: '-',
		label: 'Penduduk',
		category: 'Demografi',
		description: 'Jumlah masyarakat desa',
		icon: Users,
	},
];