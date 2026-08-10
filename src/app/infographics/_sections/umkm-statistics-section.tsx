import { UmkmStatCard } from '@/app/infographics/_components/umkm-stat-card';
import { umkmStatsData } from '@/app/infographics/_constants/umkm-stats-data';

export const UmkmStatisticsSection = () => {
	return (
		<section
			className="relative pt-12 md:pt-20 bg-slate-50 overflow-hidden rounded-b-xl"
			aria-labelledby="target-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="w-full text-center flex items-center justify-center flex-col">
					<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
						Potensi Ekonomi
					</span>

					<h2
						id="target-heading"
						className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-kutakembaran-blue mb-4 md:mb-6 max-w-4xl"
					>
						UMKM <span className="text-kutakembaran-gold block lg:inline"> Desa Kutakembaran</span>
					</h2>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
						Gambaran perkembangan dan potensi usaha masyarakat Desa Kutakembaran
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{umkmStatsData.map((item) => (
						<UmkmStatCard key={item.id} data={item} />
					))}
				</div>

				<div>
					<h3>Kategori UMKM</h3>

					<div>
						
					</div>
				</div>
			</div>
		</section>
	);
};
