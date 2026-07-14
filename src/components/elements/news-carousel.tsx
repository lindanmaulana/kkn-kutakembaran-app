'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { NEWS_DATA } from '@/const/news-data';
import Image from 'next/image';
import { IMAGE_DEFAULT } from '@/const/default';
import Link from 'next/link';

export const NewsCarousel = () => {
	const headlineNews = NEWS_DATA.filter((news) => news.isFeatured);

	return (
		<Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full relative rounded-3xl overflow-hidden group">
			<CarouselContent>
				{headlineNews.map((article) => (
					<CarouselItem key={article.id} className="relative aspect-video w-full">
						<Link href={`/news/${article.slug}`} className="block w-full h-full relative">
							<article className="w-full h-full relative">
								<Image
									src={
										article.imageUrl && article.imageUrl.trim() !== ''
											? article.imageUrl
											: IMAGE_DEFAULT
									}
									fill
									priority
									alt={article.title}
									sizes="(max-width: 1200px) 100vw, 1200px"
									className="object-cover"
								/>

								<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

								<div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white z-10">
									<h3 className="max-w-2xl text-lg sm:text-xl md:text-3xl font-bold leading-tight hover:underline">
										{article.title}
									</h3>
								</div>
							</article>
						</Link>
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
