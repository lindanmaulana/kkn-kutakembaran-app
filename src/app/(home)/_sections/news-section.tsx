import { NEWS_DATA } from '@/app/(home)/_constants/news-data';
import Image from 'next/image';
import { NewsCarousel } from '@/app/(home)/_components/news-carousel';
import { ScrollArea } from '@/components/ui/scroll-area';

export const NewsSection = () => {
	return (
		<section className="py-12 md:py-20 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
					<div className="w-full lg:w-4/6">
						<NewsCarousel />
					</div>

					<div className="w-full lg:w-2/6 flex flex-col justify-between space-y-4">
						<h2 className="text-xl md:text-2xl font-bold text-kutakembaran-blue text-center lg:text-left">
							Berita KKN
						</h2>

						<ScrollArea className="w-full h-87.5 md:h-100 lg:h-105 pr-4 *:data-radix-scroll-area-viewport:scrollbar-none">
							<div className="flex flex-col gap-4">
								{NEWS_DATA.map((news) => (
									<article
										key={news.id}
										className="flex items-center gap-4 hover:scale-[1.02] sm:hover:scale-105 transition-global group cursor-pointer"
									>
										<div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
											<Image
												src={news.imageUrl}
												fill
												alt={news.title}
												unoptimized
												className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
											/>
										</div>

										<div className="flex-1 min-w-0">
											<h3 className="text-sm md:text-base font-semibold text-gray-950 line-clamp-2 leading-snug transition-colors group-hover:text-kutakembaran-blue">
												{news.title}
											</h3>
											<div className="mt-1 flex items-center gap-2">
												<span className="text-kutakembaran-gold font-semibold text-xs md:text-sm">
													KKN
												</span>
												<span className="text-xs md:text-sm text-kutakembaran-blue">
													{news.date}
												</span>
											</div>
										</div>
									</article>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		</section>
	);
};
