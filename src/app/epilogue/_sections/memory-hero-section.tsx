import { Dot, Images, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const MemoryHeroSection = () => {
	return (
		<header className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">
			<Image
				src="/assets/images/epilogue/family.jpeg"
				alt="Memori Kebersamaan KKN Kolaboratif Desa Kutakembaran"
				fill
				priority
				sizes="100vw"
				quality={90}
				className="object-cover object-center filter brightness-[0.45] contrast-105 scale-105 transition-transform duration-1000 ease-out"
			/>

			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black pointer-events-none" />
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center space-y-6 md:space-y-8 animate-fade-in">
				<div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md shadow-2xl">
					<Dot className="size-5 -ml-1.5 animate-pulse text-amber-400" />
					<span>Memori Pengabdian · Kelompok 5</span>
				</div>

				<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
					Sampai Jumpa, <br />
					<span className="bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
						Desa Kutakembaran.
					</span>
				</h2>

				<p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal text-balance">
					Sebuah perjalanan yang diawali dengan perkenalan hangat, dibina melalui kerja bakti dan canda tawa,
					dan akan selalu abadi sebagai bagian terbaik dalam lembar hidup kami.
				</p>

				<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
					<Link
						href="#after-movie"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
					>
						<PlayCircle className="size-5" />
						<span>Putar Aftermovie</span>
					</Link>

					<Link
						href="#gallery"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/30 active:scale-[0.98]"
					>
						<Images className="size-5 text-amber-400" />
						<span>Jelajahi Galeri Foto</span>
					</Link>
				</div>
			</div>
		</header>
	);
};
