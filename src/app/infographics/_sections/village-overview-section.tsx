import { VillageOverviewCard } from '@/app/infographics/_components/village-overview-card';
import { villageOverviewData } from '@/app/infographics/_constants/village-overview-data';

export const VillageOverviewSection = () => {
	return (
		<section
			className="relative py-12 md:py-20 bg-slate-50 overflow-hidden rounded-b-xl"
			aria-labelledby="target-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="flex justify-between gap-8">
					<div className="w-full flex-1 text-center md:text-left">
						<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
							Profil Desa
						</span>

						<h2
							id="target-heading"
							className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-blue leading-tight mb-4 md:mb-6 max-w-4xl"
						>
							Sekilas Tentang
							<span className="text-kutakembaran-gold block lg:inline"> Kutakembaran</span>
						</h2>

						<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0 mb-4">
							Desa Kutakembaran merupakan salah satu desa yang memiliki potensi masyarakat dan ekonomi
							lokal yang terus berkembang.
						</p>

						<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
							Melalui kolaborasi masyarakat dan berbagai pihak, potensi tersebut terus dikembangkan untuk
							mendukung kemajuan desa.
						</p>
					</div>

					<div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
						{villageOverviewData.map((item) => (
							<VillageOverviewCard key={item.id} overview={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
