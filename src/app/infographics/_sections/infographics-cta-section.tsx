import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const InfographicsCtaSection = () => {
	return (
		<section
			className="relative py-12 md:py-20 bg-slate-50 overflow-hidden rounded-b-xl"
			aria-labelledby="target-heading"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
				<div className="bg-blue-950 px-8 py-16 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl">
					<h2 className="text-3xl font-extrabold text-white tracking-wide">Mari Kenali Desa Kutakembaran</h2>
					<p className="text-base text-white/70 max-w-lg px-2 text-center">
						Temukan informasi, potensi, UMKM, serta berbagai kegiatan yang ada di Desa Kutakembaran.
					</p>
					<Button className={'bg-primary rounded-lg text-white p-5 cursor-pointer'}>
						<Link href={'/'}>Kembali ke Beranda</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
