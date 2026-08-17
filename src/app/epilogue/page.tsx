import { AfterMovieSection } from '@/app/epilogue/_sections/after-movie-section';
import { JourneyTimelineSection } from '@/app/epilogue/_sections/journey-timeline-section';
import { MemoryHeroSection } from '@/app/epilogue/_sections/memory-hero-section';
import { ImpactMetricsSection } from '@/app/epilogue/_sections/impact-metrics-section';
import { GuestBookSection } from '@/app/epilogue/_sections/guest-book-section';
import { EpilogueAudioPlayer } from '@/app/epilogue/_components/elements/epilogue-audio-player';

const EpiloguePage = () => {
	return (
		<>
			<MemoryHeroSection />
			<ImpactMetricsSection />
			<EpilogueAudioPlayer />
			<AfterMovieSection />
			<JourneyTimelineSection />
			<GuestBookSection />
		</>
	);
};

export default EpiloguePage;
