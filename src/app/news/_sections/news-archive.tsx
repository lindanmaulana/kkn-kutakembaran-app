'use client';

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { IMAGE_DEFAULT } from '@/const/default';
import { News, NEWS_DATA, NewsCategory } from '@/const/news-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const NewsArchive = () => {
	const [activeCategory, setActiveCategory] = useState<NewsCategory | 'Semua'>('Semua');
	const [currentPage, setCurrentPage] = useState(1);

	const categories = Object.values(NewsCategory);
	const ITEMS_PER_PAGE = 10;

	const filteredData: News[] = activeCategory === 'Semua' ? NEWS_DATA : NEWS_DATA.filter((news) => news.category === activeCategory);

	const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;

	const startData = (currentPage - 1) * ITEMS_PER_PAGE;
	const endData = startData + ITEMS_PER_PAGE;
	const newsData = filteredData.slice(startData, endData);

	const handlePageChange = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	return (
		<section className="py-8 md:py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 space-y-12">
				<div className="space-y-2 text-center md:text-left">
					<h2 className="text-3xl font-bold tracking-tight text-gray-950">Pusat Informasi & Berita</h2>
					<p className="text-base text-gray-500 max-w-xl">
						Jelajahi seluruh rangkaian kabar, pengumuman, dan artikel pengabdian tim KKN.
					</p>
				</div>

				<div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
					<button
						onClick={() => {
							setActiveCategory('Semua');
							setCurrentPage(1);
						}}
						className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 whitespace-nowrap ${
							activeCategory === 'Semua'
								? 'bg-kutakembaran-blue border-transparent text-white shadow-sm shadow-kutakembaran-blue/20'
								: 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
						}`}
					>
						Semua Berita
					</button>

					{categories.map((category) => (
						<button
							key={category}
							onClick={() => {
								setActiveCategory(category);
								setCurrentPage(1);
							}}
							className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 whitespace-nowrap ${
								activeCategory === category
									? 'bg-kutakembaran-blue border-transparent text-white shadow-sm shadow-kutakembaran-blue/20'
									: 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{newsData.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{newsData.map((article) => (
							<Link
								key={article.id}
								href={`/news/${article.slug}`}
								className="group flex flex-col space-y-3 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-300"
							>
								<div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-gray-200">
									<Image
										src={article.imageUrl || IMAGE_DEFAULT}
										alt={article.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase bg-white/90 text-gray-900 rounded-md backdrop-blur-sm shadow-sm">
										{article.category}
									</span>
								</div>
								<div className="space-y-1 flex-1 flex flex-col justify-between">
									<div className="space-y-1.5">
										<h3 className="font-bold text-gray-950 text-lg leading-snug line-clamp-2 group-hover:text-kutakembaran-blue transition-colors">
											{article.title}
										</h3>
										<p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
									</div>
									<p className="text-xs text-gray-400 font-medium pt-3">
										{article.author} • {article.date}
									</p>
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
						<p className="text-sm text-gray-400 font-medium">Belum ada kabar terkait kategori ini.</p>
					</div>
				)}

				{totalPages > 1 && (
					<div className="w-full flex items-center justify-center mt-8">
						<Pagination>
							<PaginationContent className="flex items-center gap-12">
								<PaginationItem>
									<PaginationLink
										onClick={() => handlePageChange(currentPage - 1)}
										className={`flex items-center gap-1 cursor-pointer select-none ${
											currentPage === 1 ? 'pointer-events-none opacity-50' : ''
										}`}
									>
										<ChevronLeft className="h-4 w-4" />
										<span>Sebelumnya</span>
									</PaginationLink>
								</PaginationItem>

								<PaginationItem>
									<span className="text-sm font-medium px-4 text-gray-600">
										Halaman {currentPage} dari {totalPages}
									</span>
								</PaginationItem>

								<PaginationItem>
									<PaginationLink
										onClick={() => handlePageChange(currentPage + 1)}
										className={`flex items-center gap-1 cursor-pointer select-none ${
											currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
										}`}
									>
										<span>Berikutnya</span>
										<ChevronRight className="h-4 w-4" />
									</PaginationLink>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				)}
			</div>
		</section>
	);
};
