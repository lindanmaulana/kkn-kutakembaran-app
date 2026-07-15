import { NEWS_DATA } from '@/const/news-data';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { IMAGE_DEFAULT } from '@/const/default';
import Link from 'next/link';

export const NewsList = () => {
	return (
		<ScrollArea className="w-full h-87.5 md:h-100 lg:h-105 pr-4 *:data-radix-scroll-area-viewport:scrollbar-none">
			<div className="flex flex-col gap-4">
				{NEWS_DATA.map((news) => (
					<Link key={news.id} href={`/news/${news.slug}`} className="block group">
						<article className="flex items-center gap-4 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer">
							<div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
								<Image
									src={news.imageUrl && news.imageUrl.trim() !== '' ? news.imageUrl : IMAGE_DEFAULT}
									width={120}
									height={120}
									alt={news.title}
									className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
								/>
							</div>

							<div className="flex-1 min-w-0">
								<h3 className="text-sm md:text-base font-semibold text-gray-950 line-clamp-2 leading-snug transition-colors group-hover:text-kutakembaran-blue">
									{news.title}
								</h3>
								<div className="mt-1 flex items-center gap-2">
									<span className="text-kutakembaran-gold font-semibold text-xs md:text-sm">
										{news.author}
									</span>
									<span className="text-xs md:text-sm text-kutakembaran-blue">{news.date}</span>
								</div>
							</div>
						</article>
					</Link>
				))}
			</div>
		</ScrollArea>
	);
};
