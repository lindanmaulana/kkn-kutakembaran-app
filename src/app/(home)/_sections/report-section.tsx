import Image from 'next/image';
import { Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ReportSection = () => {
	return (
		<section className="relative bg-white overflow-hidden" aria-labelledby="lapor-heading">
			<div
				className="
                relative w-full bg-kutakembaran-blue text-white pt-24 pb-16 px-6 md:px-12
                before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-8 before:bg-white before:rounded-b-[2rem]
            "
			>
				<Image
					src="/assets/images/pattern/pattern-white.png"
					width={200}
					height={200}
					alt=""
					className="absolute -right-60 -top-24 size-40 md:size-90 opacity-20 md:opacity-80 pointer-events-none object-contain rotate-180"
					unoptimized
				/>

				<Image
					src="/assets/images/pattern/pattern-white.png"
					width={200}
					height={200}
					alt=""
					className="absolute -right-60 -bottom-36 size-40 md:size-90 opacity-20 md:opacity-80 pointer-events-none object-contain"
					unoptimized
				/>

				<div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
					<div className="w-full lg:flex-1 text-center lg:text-left space-y-4 md:space-y-6">
						<h2
							id="lapor-heading"
							className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-2xl"
						>
							Suarakan Aspirasimu untuk <span className="text-kutakembaran-gold">Kemajuan Desa</span> yang
							Lebih Baik!
						</h2>

						<p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
							Kami membuka ruang bagi warga Desa Kuta Kembaran untuk memberikan laporan, aduan, maupun
							saran terkait fasilitas umum dan sosial secara cepat. Bersama tim KKN Kolaboratif, mari kita
							wujudkan pelayanan desa yang lebih responsif, transparan, dan berkelanjutan!
						</p>

						<div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
							<a
								href="https://wa.me/6281234567890" 
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3.5 rounded-full bg-kutakembaran-gold cursor-pointer hover:bg-kutakembaran-gold/90 text-gray-950 font-bold text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-md"
							>
								<Megaphone className="size-4 fill-gray-950" />
								Ajukan Pengaduan
							</a>

							<div className="hidden sm:block h-8 w-px bg-white/20 mx-2" />

							<div className="flex items-center gap-1.5 opacity-90 select-none">
								<span className="text-xs font-bold tracking-widest text-white/60 uppercase">
									Portal
								</span>
								<span className="text-lg font-black tracking-tight text-white">ASPIRASI!</span>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-[35%] flex items-center justify-center relative">
						<div className="relative size-48 sm:size-60 md:size-64 hover:scale-105 transition-transform duration-300">
							<Image
								src="/assets/images/logo/logo-kkn.png"
								fill
								alt="Logo KKN Kolaboratif"
								className="object-contain"
								unoptimized
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
