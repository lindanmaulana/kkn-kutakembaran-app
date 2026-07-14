import { IMAGE_DEFAULT } from '@/const/default';
import { News } from '@/const/news-data';
import { Calendar, ChevronRight, Tag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsDetailDefault } from '@/app/news/[slug]/_components/news-detail-default';

interface NewsDetailContentSectionProps {
	article: News | undefined | null;
}

export const NewsDetailContentSection = ({ article }: NewsDetailContentSectionProps) => {
	if (!article) return <NewsDetailDefault />;

	return (
		<section className="py-8 md:py-12 bg-white">
			<div className="max-w-4xl mx-auto px-4 space-y-6 md:space-y-8">
				<nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
					<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
						Beranda
					</Link>
					<ChevronRight className="size-3.5 shrink-0 text-gray-400" />
					<Link href="/news" className="hover:text-kutakembaran-blue transition-colors">
						Berita
					</Link>
					<ChevronRight className="size-3.5 shrink-0 text-gray-400" />
					<span className="text-gray-900 font-medium truncate max-w-50 sm:max-w-100">{article.title}</span>
				</nav>

				<div className="space-y-4">
					<h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-950 leading-tight">
						{article.title}
					</h1>

					<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500 border-b border-gray-100 pb-6">
						<div className="flex items-center gap-1.5">
							<Tag className="size-4 text-kutakembaran-blue" />
							<span className="font-semibold text-gray-700">{article.category}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<Calendar className="size-4" />
							<span>{article.date}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<User className="size-4" />
							<span>
								Oleh: <span className="text-gray-700 font-medium">{article.author}</span>
							</span>
						</div>
					</div>
				</div>

				<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
					<Image
						src={article.imageUrl || IMAGE_DEFAULT}
						alt={article.title}
						fill
						priority
						sizes="(max-width: 1200px) 100vw, 896px"
						className="object-cover"
					/>
				</div>

				<article className="prose prose-gray md:prose-lg max-w-none text-gray-800 leading-relaxed text-base md:text-lg space-y-6">
					{article.content ? (
						<div dangerouslySetInnerHTML={{ __html: article.content }} />
					) : (
						<p>{article.excerpt}</p>
					)}
				</article>
			</div>
		</section>
	);
};
