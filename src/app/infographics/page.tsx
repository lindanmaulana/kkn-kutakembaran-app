import { InfographicsHeroSection } from '@/app/infographics/_sections/info-graphics-hero-section';
import { VillageStatisticsSection } from '@/app/infographics/_sections/village-statistics-section';
import { VillageOverviewSection } from '@/app/infographics/_sections/village-overview-section';
import { InfographicsCtaSection } from '@/app/infographics/_sections/infographics-cta-section';
// import { UmkmStatisticsSection } from '@/app/infographics/_sections/umkm-statistics-section';

const InfographicPage = () => {
	return (
		<>
			<InfographicsHeroSection />
			<VillageStatisticsSection />
			<VillageOverviewSection />
			{/* <UmkmStatisticsSection /> */}
			<InfographicsCtaSection />
		</>
	);
};

export default InfographicPage;
