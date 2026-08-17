export interface RoleOption {
	id: string;
	value: string;
	label: string;
	badgeText: string;
	avatarInitial: string;
	color: string;
}

export const ROLE_OPTIONS: RoleOption[] = [
	{
		id: 'wrg',
		value: 'warga',
		label: 'Warga Desa Kutakembaran',
		badgeText: 'Warga',
		avatarInitial: 'WG',
		color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
	},
	{
		id: 'prd',
		value: 'perangkat_desa',
		label: 'Pemerintah / Perangkat Desa',
		badgeText: 'Perangkat Desa',
		avatarInitial: 'KD',
		color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
	},
	{
		id: 'spd',
		value: 'siswa_pemuda',
		label: 'Siswa / Pemuda Desa',
		badgeText: 'Siswa / Pemuda',
		avatarInitial: 'SD',
		color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
	},
	{
		id: 'mhs',
		value: 'mahasiswa_kkn',
		label: 'Mahasiswa KKN (Kelompok 5)',
		badgeText: 'Mahasiswa KKN',
		avatarInitial: 'K5',
		color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
	},
	{
		id: 'tkm',
		value: 'tokoh_masyarakat',
		label: 'Tokoh Masyarakat / Agama',
		badgeText: 'Tokoh Masyarakat',
		avatarInitial: 'TM',
		color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
	},
	{
		id: 'umm',
		value: 'umum',
		label: 'Umum / Lainnya',
		badgeText: 'Tamu',
		avatarInitial: 'TM',
		color: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
	},
];
