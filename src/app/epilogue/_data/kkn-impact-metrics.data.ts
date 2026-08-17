import { Calendar, CheckCircle2, LucideIcon, Store, Users } from 'lucide-react';

export interface ImpactMetric {
	id: string;
	value: string;
	label: string;
	category: string;
	icon: LucideIcon;
}

export const kknImpactMetrics: ImpactMetric[] = [
	{
		id: 'durasi',
		value: '30+ Hari',
		label: 'Pengabdian Masyarakat',
		category: 'DURASI',
		icon: Calendar,
	},
	{
		id: 'capaian',
		value: '10+ Proker',
		label: 'Terlaksana 100% Selesai',
		category: 'CAPAIAN',
		icon: CheckCircle2,
	},
	{
		id: 'ekonomi',
		value: '10+ UMKM',
		label: 'Terdata & Didigitalisasi',
		category: 'EKONOMI',
		icon: Store,
	},
	{
		id: 'wilayah',
		value: '3 Dusun',
		label: 'Terjangkau Lintas Sektor',
		category: 'WILAYAH',
		icon: Users,
	},
];
