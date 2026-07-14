'use client';

import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsTiktok, BsTwitterX } from 'react-icons/bs';

export const ComingSoon = () => {
	return (
		<section className="min-h-screen w-full bg-white flex flex-col justify-between items-center px-4 py-8 md:py-12">
			<div className="hidden sm:block h-10" />

			<div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6 md:space-y-8">
				<div className="relative size-40 sm:size-48 md:size-52 hover:scale-105 transition-transform duration-300">
					<Image
						src="/assets/images/logo/logo-kkn.png"
						fill
						alt="Logo KKN Kolaboratif"
						className="object-contain"
						unoptimized
					/>
				</div>

				<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
					<span className="text-kutakembaran-blue">Coming</span>{' '}
					<span className="text-kutakembaran-gold">Soon</span>
				</h1>

				<p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg px-2">
					Segera hadir! Fitur atau halaman ini sedang dalam proses pengembangan oleh tim KKN Kolaboratif untuk
					memberikan layanan digitalisasi desa terbaik. Terus pantau perkembangan terbaru dari kami, ya!
				</p>

				<div className="pt-2">
					<Link
						href="/"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kutakembaran-gold hover:bg-kutakembaran-gold/90 text-gray-950 font-semibold text-sm transition-all hover:scale-105 shadow-md group"
					>
						<Home className="size-4 transition-transform group-hover:-translate-x-0.5" />
						Kembali ke Beranda
					</Link>
				</div>
			</div>

			<div className="w-full flex flex-col items-center gap-4 border-t border-gray-50 pt-6">
				<div className="flex items-center gap-6 text-gray-400">
					<a href="https://www.instagram.com/kkn26.kutakembaran" className="hover:text-kutakembaran-blue transition-colors">
						<BsInstagram className="size-5" />
					</a>
					<a href="https://www.tiktok.com/@kkn26.kutakembaran" className="hover:text-kutakembaran-blue transition-colors">
						<BsTiktok className="size-5" />
					</a>
					<a href="#" className="hover:text-kutakembaran-blue transition-colors">
						<BsTwitterX className="size-5" />
					</a>
				</div>
				<p className="text-xs text-gray-400">© 2026 KKN Kolaboratif Kuta Kembaran. All Rights Reserved.</p>
			</div>
		</section>
	);
};
