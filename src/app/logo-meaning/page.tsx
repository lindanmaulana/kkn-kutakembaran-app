import Image from 'next/image';

const LogoMeaning = () => {
	return (
		<>
			<section className="py-8 md:py-16 bg-gray-50/50 border-b">
				<div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12">
					<div className="space-y-2 text-center md:text-left">
						<div className="text-base md:text-lg font-semibold tracking-tight text-black/70">
							Logo KKN Kolaboratif
						</div>
						<h2 className="text-2xl md:text-3xl font-bold">
							Arti Logo<span className="text-kutakembaran-gold"> KKN Kolaboratif Desa Kutakembaran</span>
						</h2>
					</div>

					<div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
						<div className="w-full md:max-w-[55%] flex flex-col items-start gap-6 md:gap-8">
							<article className="flex items-start gap-4 md:gap-6">
								<figure className="relative size-20 md:size-24 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
									<Image
										src={'/assets/images/logo/filosofi/fil-daun.png'}
										width={150}
										height={150}
										alt="Filosofi Daun"
										className="size-full object-cover"
									/>
								</figure>
								<div className="space-y-1 pt-1">
									<h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
										Daun
									</h3>
									<p className="text-sm md:text-base text-gray-700 leading-relaxed">
										Melambangkan{' '}
										<span className="font-semibold text-green-700">
											kehidupan, pertumbuhan, harapan, serta komitmen menjaga kelestarian alam.
										</span>
									</p>
								</div>
							</article>

							<article className="flex items-start gap-4 md:gap-6">
								<figure className="relative size-20 md:size-24 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
									<Image
										src={'/assets/images/logo/filosofi/fil-lamping-buligir.png'}
										width={150}
										height={150}
										alt="Filosofi Lamping Buligir"
										className="size-full object-cover"
									/>
								</figure>
								<div className="space-y-1 pt-1">
									<h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
										Lamping Buligir
									</h3>
									<p className="text-sm md:text-base text-gray-700 leading-relaxed">
										Melambangkan identitas alam Desa Kutakembaran{' '}
										<span className="font-semibold text-green-700">
											tebing yang kokoh, indah, dan menjadi simbol kelestarian lingkungan.
										</span>
									</p>
								</div>
							</article>

							<article className="flex items-start gap-4 md:gap-6">
								<figure className="relative size-20 md:size-24 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
									<Image
										src={'/assets/images/logo/filosofi/fil-mahasiswa.png'}
										width={150}
										height={150}
										alt="Filosofi Mahasiswa"
										className="size-full object-cover"
									/>
								</figure>
								<div className="space-y-1 pt-1">
									<h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
										Mahasiswa
									</h3>
									<p className="text-sm md:text-base text-gray-700 leading-relaxed">
										Melambangkan{' '}
										<span className="font-semibold text-green-700">
											persatuan, Kolaborasi, pengabdian, dan sinergi{' '}
										</span>{' '}
										mahasiswa bersama masyarakat dalam membangun desa.
									</p>
								</div>
							</article>

							<article className="flex items-start gap-4 md:gap-6">
								<figure className="relative size-20 md:size-24 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
									<Image
										src={'/assets/images/logo/filosofi/fil-pesawahan.png'}
										width={150}
										height={150}
										alt="Filosofi Pesawahan"
										className="size-full object-cover"
									/>
								</figure>
								<div className="space-y-1 pt-1">
									<h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
										Pesawahan
									</h3>
									<p className="text-sm md:text-base text-gray-700 leading-relaxed">
										Melambangkan{' '}
										<span className="font-semibold text-green-700">
											sumber kehidupan, kerja keras, kemakmuran, dan semangat gotong royong
										</span>{' '}
										masyarakat.
									</p>
								</div>
							</article>
						</div>

						<div className="order-first md:order-last w-48 h-48 sm:w-64 sm:h-64 md:w-87.5 md:h-87.5 flex items-center justify-center">
							<Image
								src={'/assets/images/logo/logo-kkn.png'}
								width={400}
								height={400}
								alt="KKN Kolaboratif"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LogoMeaning;
