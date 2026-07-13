import { CollaborationSection } from '@/app/(home)/_sections/collaboration-section';
import { HeroBanner } from '@/app/(home)/_sections/hero-banner';
import { NewsSection } from '@/app/(home)/_sections/news-section';
import { AboutUsSection } from '@/app/(home)/_sections/about-us-section';
import { TargetSection } from '@/app/(home)/_sections/target-section';
import { ObjectiveSection } from '@/app/(home)/_sections/objective-section';
import { TeamSection } from '@/app/(home)/_sections/team-section';
import { FloatingAction } from '@/components/elements/floating-action';
import { FaqSection } from '@/app/(home)/_sections/faq-section';

export default function Home() {
	return (
		<>
			<div id="hero-trigger" />
			<HeroBanner />
			<FloatingAction />
			<NewsSection />
			<CollaborationSection />
			<AboutUsSection />
			<TargetSection />
			<ObjectiveSection />
			<TeamSection />
			<FaqSection />
		</>
	);
}
