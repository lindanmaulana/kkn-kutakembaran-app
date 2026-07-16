'use client';

import Image from 'next/image';

export const AboutUsSection = () => {
	return (
		<section
			className="relative py-12 md:py-20 bg-white overflow-hidden border-b border-kutakembaran-blue/20"
			aria-labelledby="about-heading"
		>
			<Image
				src={'/assets/images/pattern/pattern-blue.png'}
				width={120}
				height={120}
				alt="pattern-blue"
				loading="lazy"
				className="size-64 md:size-88 absolute -right-32 md:-right-44 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 md:opacity-100"
			/>

			<Image
				src={'/assets/images/dots/dot-blue.png'}
				width={120}
				height={120}
				alt="dot-blue"
				className="hidden md:block size-24 absolute left-24 top-20 opacity-20 pointer-events-none"
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
				<div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
					<div className="w-full flex-1 text-center md:text-left">
						<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
							Tentang Kami
						</span>

						<h2
							id="about-heading"
							className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-blue leading-tight mb-4 md:mb-6 max-w-4xl"
						>
							KKN Kolaboratif: Sinergi Multi-Kampus yang Berkomitmen pada
							<span className="text-kutakembaran-gold block lg:inline"> Pembangunan Masyarakat</span> di
							Kabupaten Kuningan
						</h2>

						<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
							KKN Kolaboratif merupakan inisiatif strategis gabungan berbagai perguruan tinggi yang
							bertugas mendorong optimalisasi potensi desa di seluruh wilayah Kabupaten Kuningan. Kami
							berfokus pada peningkatan kualitas hidup masyarakat melalui program pengabdian yang
							terstruktur, terukur, dan berbasis data.
						</p>
					</div>

					<div className="w-full md:w-[40%] flex items-center justify-center md:justify-end">
						<figure className="size-56 sm:size-72 md:size-88 bg-white/20 backdrop-blur-xs p-4 md:p-6 rounded-full border border-gray-100 shadow-sm md:shadow-none flex items-center justify-center">
							<div className="relative w-full h-full">
								<Image
									src={'/assets/images/logo/logo-kkn.png'}
									fill
									alt="KKN-Kolaboratif"
									loading="lazy"
									className="object-contain"
								/>
							</div>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};
