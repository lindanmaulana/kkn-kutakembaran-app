
interface TimelineItem {
	id: string;
	step: string;
	title: string;
	description: string;
}

const TIMELINE_DATA: TimelineItem[] = [
	{
		id: 'week-1',
		step: 'Minggu 1',
		title: 'Kedatangan & Penerimaan Resmi',
		description:
			'Penyambutan hangat oleh Bapak Kepala Desa beserta perangkat Desa Kutakembaran, dilanjutkan dengan pemetaan wilayah di 4 dusun.',
	},
	{
		id: 'week-2',
		step: 'Minggu 2',
		title: 'Edukasi Sekolah & Posyandu',
		description:
			'Pelaksanaan Edukasi PHBS di SDN 1 & SDN 2, Sosialisasi Anti-Bullying, serta pendampingan rutin pelayanan Posyandu Balita di Bale Desa.',
	},
	{
		id: 'week-3',
		step: 'Minggu 3',
		title: 'Workshop 3R & Digitalisasi UMKM',
		description:
			'Gelar Workshop 3R (Eco-Enzyme, Paving Block, Biopori), Aksi Bersih Pandawara 5 Desa, Seminar Sadar Hukum, serta Pendampingan QRIS UMKM.',
	},
	{
		id: 'week-4',
		step: 'Minggu 4',
		title: 'Monev Bupati & Tabligh Akbar',
		description:
			'Pemaparan hasil capaian program kerja saat Monev Serentak bersama Bupati Kuningan, dan ditutup dengan Tabligh Akbar Purna Tugas KKN.',
	},
];

export const JourneyTimelineSection = () => {
	return (
		<section
			id="journey"
			className="relative w-full overflow-hidden flex flex-col items-center justify-center py-20 bg-black"
		>
			<div className="z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
				<div className="w-full flex items-center justify-center flex-col text-center mb-16">
					<span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 block mb-2">
						TIMELINE PENGABDIAN
					</span>

					<h2
						id="objective-heading"
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 max-w-4xl"
					>
						Langkah demi Langkah di <span className="text-amber-400 block sm:inline">Kutakembaran.</span>
					</h2>

					<p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mx-auto">
						Saksikan rekaman kilas balik pelaksanaan program kerja KKN Kolaboratif Kelompok 5 di Desa
						Kutakembaran.
					</p>
				</div>

				<div className="relative w-full">
					<div className="absolute left-4 top-0 hidden h-full w-px bg-slate-800 md:left-1/2 md:block md:-translate-x-1/2" />

					<div className="space-y-12">
						{TIMELINE_DATA.map((item, index) => {
							const isEven = index % 2 === 0;

							return (
								<div key={item.id} className="relative flex flex-col gap-6 md:flex-row md:items-center">
									<div
										className={`md:w-1/2 ${
											isEven ? 'md:pr-12 md:text-right' : 'order-2 md:order-1'
										}`}
									>
										{isEven && (
											<div>
												<span className="text-xs font-bold uppercase tracking-wider text-amber-400">
													{item.step}
												</span>
												<h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
												<p className="mt-2 text-sm leading-relaxed text-slate-400">
													{item.description}
												</p>
											</div>
										)}
									</div>

									<div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-amber-400 bg-slate-950 ring-4 ring-black md:block" />

									<div
										className={`md:w-1/2 ${!isEven ? 'order-1 md:order-2 md:pl-12 text-left' : ''}`}
									>
										{!isEven && (
											<div>
												<span className="text-xs font-bold uppercase tracking-wider text-amber-400">
													{item.step}
												</span>
												<h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
												<p className="mt-2 text-sm leading-relaxed text-slate-400">
													{item.description}
												</p>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
