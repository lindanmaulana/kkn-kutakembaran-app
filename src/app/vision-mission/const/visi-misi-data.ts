import { Brain, LucideIcon, ShieldAlert, Users } from 'lucide-react';

interface VisionMission {
	id: string;
	icon: LucideIcon;
	title: string;
	description: string;
}

export const VISION_MISSION_DATA: VisionMission[] = [
	{
		id: 'vsms-01',
		icon: Brain,
		title: 'Pencegahan Stunting & Edukasi Kesehatan',
		description:
			'Meningkatkan kesadaran pola hidup sehat dan pemenuhan gizi seimbang melalui edukasi warga untuk menekan angka stunting.',
	},
	{
		id: 'vsms-02',
		icon: ShieldAlert,
		title: 'Sanitasi Lingkungan & Pengelolaan Sampah',
		description:
			'Membangun sistem tata kelola sampah yang adaptif dan edukatif guna menciptakan lingkungan desa yang bersih dan sehat.',
	},
	{
		id: 'vsms-03',
		icon: Users,
		title: 'Pemberdayaan Ekonomi & Pengembangan UMKM',
		description:
			'Mendorong kemandirian ekonomi desa lewat inovasi, digitalisasi produk, dan kolaborasi aktif pelaku UMKM lokal.',
	},
];
