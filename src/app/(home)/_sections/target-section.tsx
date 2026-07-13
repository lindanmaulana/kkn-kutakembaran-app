import Image from 'next/image';
import { TARGET_PROGRAMS } from '../_constants/target-data';
import { ProgramCard } from '../_components/program-card';

export const TargetSection = () => {
	return (
		<section
			className="relative py-12 md:py-20 bg-slate-50 overflow-hidden rounded-b-xl"
			aria-labelledby="target-heading"
		>
			<Image
				src={'/assets/images/pattern/pattern-double-blue.png'}
				width={20}
				height={20}
				alt="pattern-double-blue"
				loading="lazy"
				unoptimized
				className="w-1/3 h-60 opacity-10 absolute -right-62 top-20"
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="w-full flex-1 text-center md:text-left">
					<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
						Tentang Kami
					</span>

					<h2
						id="target-heading"
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-blue leading-tight mb-4 md:mb-6 max-w-4xl"
					>
						Misi KKN Kolaboratif untuk Menuju
						<span className="text-kutakembaran-gold block lg:inline"> Indonesia Emas</span> di Kabupaten
						Kuningan
					</h2>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
						Program komprehensif yang dirancang untuk memastikan setiap desa mendapatkan optimalisasi
						potensi dan pengabdian terbaik, mendukung tercapainya Indonesia Emas melalui generasi dan
						lingkungan masyarakat yang sehat, produktif, serta berkualitas.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<article className="relative min-h-100 p-8 rounded-xl bg-kutakembaran-gold space-y-2 overflow-hidden shadow-md">
						<Image
							src={'/assets/images/pattern/pattern-blue.png'}
							width={20}
							height={20}
							alt="pattern-blue"
							loading="lazy"
							unoptimized
							className="size-60 absolute -bottom-28 -right-24"
						/>

						<h3 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight leading-snug">
							Sasaran Program KKN
						</h3>
						<p className="text-sm md:text-base text-gray-900/90 leading-relaxed font-normal">
							Kami mendukung pemberdayaan masyarakat melalui berbagai program kerja untuk memastikan
							setiap desa mendapatkan optimalisasi potensi daerah yang berkelanjutan.
						</p>
					</article>

					{TARGET_PROGRAMS.map((target) => (
						<ProgramCard key={target.id} target={target} />
					))}
				</div>
			</div>
		</section>
	);
};
