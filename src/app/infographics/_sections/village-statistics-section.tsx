import { VillageStatisticCard } from '@/app/infographics/_components/village-statistic-card';
import { villageStatisticsData } from '@/app/infographics/_constants/village-statistics-data';

export const VillageStatisticsSection = () => {
	return (
		<section className="relative pb-20 bg-slate-50 overflow-hidden rounded-b-xl" aria-labelledby="target-heading">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{villageStatisticsData.map((item) => (
						<VillageStatisticCard key={item.id} statistic={item} />
					))}
				</div>
			</div>
		</section>
	);
};
