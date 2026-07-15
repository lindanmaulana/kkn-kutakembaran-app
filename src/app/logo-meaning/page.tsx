import Image from "next/image";

const LogoMeaning = () => {
	return (
		<>
			<section className="py-4 md:py-10 bg-gray-50/50 border-b">
				<div className="max-w-7xl mx-auto px-4 space-y-12">
					<div className="space-y-2">
						<div className="text-lg font-semibold tracking-tight text-black/70">Logo KKN Kolaboratif</div>
						<h2 className="text-3xl font-bold">
							Arti Logo<span className="text-kutakembaran-gold"> KKN Kolaboratif Desa Kutakembaran</span>
						</h2>
					</div>


					<div className="grid grid-cols-2 gap-8">
						<div className="flex flex-col items-start gap-4">
							coming soon...
						</div>


						<div>
							<Image src={'/assets/images/logo/logo-kkn.png'} width={120} height={120} alt="KKN Kolaboratif" className="size-120" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LogoMeaning;
