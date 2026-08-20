import { Marquee } from '@/components/ui/marquee';
import { GuestBookMarquee } from '@/app/epilogue/_components/elements/guest-book-marquee';

export interface Message {
	id: string;
	name: string;
	location: string;
	value: string;
}

export const AfterMovieSection = () => {
	return (
		<section
			id="after-movie"
			className="w-full overflow-hidden flex flex-col items-center justify-center py-10 bg-black"
		>
			<div className="z-10 max-w-7xl mx-auto px-4 text-center space-y-6 md:space-y-8">
				<div className="w-full flex items-center justify-center flex-col">
					<span className="text-sm md:text-base font-semibold text-gray-500 tracking-wider block mb-2">
						AFTER MOVIE
					</span>

					<h2
						id="objective-heading"
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-2 max-w-4xl"
					>
						Satu Perjalanan,
						<span className="text-amber-400 block lg:inline"> Banyak Kenangan.</span>
					</h2>

					<p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mx-auto">
						Saksikan rekaman kilas balik pelaksanaan program kerja KKN Kolaboratif Kelompok 5 di Desa
						Kutakembaran.
					</p>
				</div>
			</div>

			<div className="w-full max-w-6xl px-4 mt-8 flex flex-col lg:flex-row gap-6 items-center">
				<div className="aspect-video w-full flex-1 overflow-hidden rounded-2xl bg-slate-950 border border-white/10 shadow-2xl">
					<iframe
						className="h-full w-full border-0"
						src="https://www.youtube.com/embed/knstnMGZDOY?si=iZF9uj5AdntDVrHb"
						title="Dokumentasi Video Aftermovie KKN"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						loading="lazy"
					/>
				</div>

				<GuestBookMarquee />
			</div>

			<div className="max-w-3xl px-4 mt-8 text-center">
				<p className="italic text-slate-400 text-sm md:text-base">
					&ldquo;Perubahan yang berkelanjutan tidak lahir dari satu pihak, tetapi dari kolaborasi erat antara
					mahasiswa, masyarakat, pemerintah desa, dan seluruh elemen daerah.&rdquo;
				</p>

				<div className="mt-2 font-medium text-slate-500 text-xs md:text-sm">- KKN Kelompok 5 Kutakembaran</div>
			</div>
		</section>
	);
};
