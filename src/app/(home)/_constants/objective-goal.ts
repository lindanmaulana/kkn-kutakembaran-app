import { Coins, GraduationCap, LineChart, LucideIcon, ShieldAlert, TrendingUp } from "lucide-react";

interface ObjectiveGoal {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
}

export const OBJECTIVE_GOALS: ObjectiveGoal[] = [
	{
		id: 'goal-1',
		title: 'Optimalisasi Potensi Desa',
		description:
			'Mengupayakan agar setiap desa lokasi KKN memiliki pemetaan potensi daerah yang jelas dan optimal sebagai modal utama kemandirian ekonomi masyarakat.',
		icon: TrendingUp
	},
	{
		id: 'goal-2',
		title: 'Kerentanan Sosial Rendah',
		description:
			'Berkomitmen menurunkan angka permasalahan desa (seperti stunting dan putus sekolah) melalui intervensi program mahasiswa yang tepat sasaran dan berkelanjutan.',
		icon: ShieldAlert,
	},
	{
		id: 'goal-3',
		title: 'Partisipasi Pendidikan Tinggi',
		description:
			'Menjamin peningkatan motivasi anak-anak desa untuk dapat mengakses pendidikan hingga jenjang perguruan tinggi melalui program bimbingan belajar dan literasi.',
		icon: GraduationCap,
	},
	{
		id: 'goal-4',
		title: 'Efisiensi Anggaran Desa',
		description:
			'Dengan digitalisasi tata kelola administrasi desa yang lebih baik, perangkat desa dapat memangkas birokrasi dan mengurangi beban operasional yang tidak perlu.',
		icon: Coins,
	},
	{
		id: 'goal-5',
		title: 'Peningkatan Produktivitas Lokal',
		description:
			'Masyarakat desa yang teredukasi dan terampil akan berkontribusi langsung pada pertumbuhan ekonomi, usaha mikro (UMKM), serta kemajuan wilayah secara jangka panjang.',
		icon: LineChart,
	},
];
