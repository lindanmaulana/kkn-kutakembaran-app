export const HeroBanner = () => {
	return (
		<section className="relative h-screen overflow-hidden">
			<video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
				<source src="/assets/videos/vid-banner.webm" />
			</video>

			<div className="absolute inset-0 bg-black/40"></div>

			<div className="relative z-10 h-full"></div>
		</section>
	);
};
