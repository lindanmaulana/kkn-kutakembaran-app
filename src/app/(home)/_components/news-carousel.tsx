'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { NEWS_DATA } from '@/app/(home)/_constants/news-data';
import Image from 'next/image';

export const NewsCarousel = () => {
	const headlineNews = NEWS_DATA.slice(0, 3);
	return (
		<Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full relative rounded-3xl overflow-hidden group">
			<CarouselContent>
				{headlineNews.map((article) => (
					<CarouselItem key={article.id} className="relative aspect-video w-full">
						<Image src={article.imageUrl} width={80} height={80} alt={article.title} unoptimized className="w-full h-full object-cover" />

						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

						<div className="absolute bottom-10 left-2 right-0 p-6 text-white">
							<h3 className="text-lg md:text-xl font-bold leading-tight hover:underline cursor-pointer">
								{article.title}
							</h3>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
				{headlineNews.map((_, index) => (
					<div
						key={index}
						className={`h-1 rounded-full transition-all duration-300 ${
							index === 0 ? 'w-8 bg-kutakembaran-blue' : 'w-4 bg-white/50'
						}`}
					/>
				))}
			</div>
		</Carousel>
	);
};
