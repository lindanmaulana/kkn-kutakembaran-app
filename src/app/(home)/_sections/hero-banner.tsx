import Link from 'next/link';

export const HeroBanner = () => {
	return (
		<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			<video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
				<source src="/assets/videos/vid-banner.webm" type="video/webm" />
			</video>

			<div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60"></div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6 md:space-y-8 animate-fade-in">
				<span className="inline-block text-xs md:text-sm font-semibold text-kutakembaran-gold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
					KKN Kolaboratif 2026
				</span>

				<h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
					Membangun Bersama Menuju <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-kutakembaran-gold to-yellow-300">
						Desa Mandiri & Berdaya
					</span>
				</h1>

				<p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
					Aksi nyata kolaborasi mahasiswa lintas perguruan tinggi dalam mengoptimalkan potensi daerah,
					digitalisasi layanan, dan bersinergi bersama masyarakat Desa Kuta Kembaran.
				</p>

				<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="#target-heading"
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-kutakembaran-gold hover:bg-kutakembaran-gold/90 text-gray-950 font-bold text-sm transition-all hover:scale-105 shadow-lg text-center"
					>
						Jelajahi Program
					</a>
					<Link
						href="/team"
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white text-white hover:bg-white/20 font-medium text-sm transition-all text-center"
					>
						Profil Tim KKN
					</Link>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-70">
				<span className="text-[10px] text-white tracking-widest uppercase font-medium">Scroll Kebawah</span>
				<div className="w-1 h-4 bg-white rounded-full"></div>
			</div>
		</section>
	);
};
