import { NewsCarousel } from '@/components/elements/news-carousel';
import { NewsList } from '@/components/elements/news-list';

export const BlogSection = () => {
	return (
		<section className="py-4 md:py-8 bg-gray-50/50">
			<div className="max-w-7xl mx-auto px-4 space-y-12">
				<div className="space-y-2">
					<div className="text-lg font-semibold tracking-tight text-black/70">Kabar Kegiatan Kami</div>
					<h2 className="text-3xl font-bold">
						Serangkaian cerita pengabdian{' '}
						<span className="text-kutakembaran-gold">KKN Kolaboratif Kutakembaran</span>
					</h2>
				</div>

				<div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
					<div className="w-full lg:w-4/6">
						<NewsCarousel />
					</div>

					<div className="w-full lg:w-2/6 flex flex-col justify-between space-y-4">
						<h2 className="text-xl md:text-2xl font-bold text-kutakembaran-blue text-center lg:text-left">
							Berita KKN
						</h2>

						<NewsList />
					</div>
				</div>
			</div>
		</section>
	);
};
