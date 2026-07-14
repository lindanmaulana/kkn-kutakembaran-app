'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { IMAGE_DEFAULT } from '@/const/default';
import { NEWS_DATA, NewsCategory } from '@/const/news-data';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export const VillageNewsSection = () => {
	const villageNews = NEWS_DATA.filter((news) => news.category === NewsCategory.VILLAGE);

	return (
		<section className="py-4 md:py-8 bg-white">
			<div className="max-w-7xl mx-auto px-4 space-y-6">
				<h2 className="text-3xl font-bold tracking-tight text-gray-950">Kabar Desa Terbaru</h2>

				{villageNews.length > 0 ? (
					<Carousel
						plugins={[Autoplay({ delay: 5000 })]}
						className="w-full"
						opts={{ align: 'start', loop: false }}
					>
						<CarouselContent className="-ml-4">
							{villageNews.map((article) => (
								<CarouselItem key={article.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
									<div className="relative aspect-16/10 rounded-2xl overflow-hidden group cursor-pointer">
										<Image
											src={article.imageUrl || IMAGE_DEFAULT}
											alt={article.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/30 to-transparent flex flex-col justify-end p-4">
											<h3 className="text-white font-semibold text-base line-clamp-2">
												{article.title}
											</h3>
											<p className="text-xs text-gray-300 mt-1">
												{article.author} • {article.date}
											</p>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				) : (
					<div className="text-center py-10 border-gray-200 rounded-2xl bg-gray-50/50">
						<p className="text-sm text-gray-400 font-medium">Belum ada kabar terkait Desa</p>
					</div>
				)}
			</div>
		</section>
	);
};
