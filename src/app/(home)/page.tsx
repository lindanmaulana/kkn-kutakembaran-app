import { AboutUsSection } from '@/app/(home)/_sections/about-us-section';
import { CollaborationSection } from '@/app/(home)/_sections/collaboration-section';
import { FaqSection } from '@/app/(home)/_sections/faq-section';
import { HeroBanner } from '@/app/(home)/_sections/hero-banner';
import { NewsSection } from '@/app/(home)/_sections/news-section';
import { ObjectiveSection } from '@/app/(home)/_sections/objective-section';
import { ReportSection } from '@/app/(home)/_sections/report-section';
import { TargetSection } from '@/app/(home)/_sections/target-section';
import { TeamSection } from '@/app/(home)/_sections/team-section';

export default function Home() {
	return (
		<>
			<div id="hero-trigger" />
			<HeroBanner />
			<NewsSection />
			<CollaborationSection />
			<AboutUsSection />
			<TargetSection />
			<ObjectiveSection />
			<TeamSection />
			<FaqSection />
			<ReportSection />
		</>
	);
}
