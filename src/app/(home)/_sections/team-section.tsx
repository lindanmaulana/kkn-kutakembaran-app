import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const TeamSection = () => {
	return (
		<section className="relative py-24 md:py-32 bg-white -mt-10 overflow-hidden" aria-labelledby="team-heading">
			<div
				className="
                    absolute inset-0 bg-kutakembaran-blue
                    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-8 before:bg-white before:rounded-b-[2rem]
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-8 after:bg-white after:rounded-t-[2rem]
            "
			/>

			<Image
				src={'/assets/images/pattern/pattern-white.png'}
				width={140}
				height={140}
				alt="pattern-white"
				loading="lazy"
				className="w-110 h-60 absolute -right-36 top-1/2 -translate-y-1/2 rotate-267 rounded-full opacity-20 sm:opacity-50 md:opacity-100"
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
				<div className="w-full flex-1 text-center md:text-left">
					<span className="text-sm md:text-base font-semibold text-kutakembaran-white tracking-wider block mb-2">
						Tim KKN
					</span>

					<h2
						id="team-heading"
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-white leading-tight mb-4 md:mb-6"
					>
						Tim kami terdiri dari <span className="text-kutakembaran-gold">berbagai latar belakang</span>,
						<br className="hidden md:inline" /> yang semuanya berdedikasi untuk mencapai{' '}
						<br className="hidden md:inline" /> tujuan pembangunan desa.
					</h2>

					<Link
						href={'/team'}
						className="px-4 py-3 border rounded-full inline-flex items-center gap-2 bg-kutakembaran-white/20 hover:bg-kutakembaran-gold/20 cursor-pointer text-white hover:text-white border-white/80 hover:border-kutakembaran-gold font-medium text-sm transition-global hover:scale-105 shadow-sm"
					>
						<Info /> Pelajari Selengkapnya
					</Link>
				</div>
			</div>
		</section>
	);
};
