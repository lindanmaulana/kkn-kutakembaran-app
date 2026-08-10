export const InfographicsHeroSection = () => {
	return (
		<section
			className="relative pt-12 md:pt-20 bg-slate-50 overflow-hidden rounded-b-xl"
			aria-labelledby="target-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="w-full text-center flex items-center justify-center flex-col">
					<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
						Informasi Desa
					</span>

					<h2
						id="target-heading"
						className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-kutakembaran-blue mb-4 md:mb-6 max-w-4xl"
					>
						Mengenal Desa <br />
						<span className="text-kutakembaran-gold block lg:inline"> Kutakembaran</span> Lebih Dekat
					</h2>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
						Data dan informasi Desa Kutakembaran yang disajikan secara visual, informatif, dan mudah
						dipahami.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
			</div>
		</section>
	);
};
