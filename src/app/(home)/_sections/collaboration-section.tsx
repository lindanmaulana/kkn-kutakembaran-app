'use client';

import Image from 'next/image';
import { CollaborationItem } from '@/app/(home)/_components/colaboration-item';

export const CollaborationSection = () => {
	return (
		<section className="relative py-10 bg-kutakembaran-blue overflow-hidden px-4 sm:px-6">
			<Image
				src={'/assets/images/pattern/pattern-white.png'}
				width={20}
				height={20}
				alt=""
				loading="lazy"
				unoptimized
				className="absolute -left-20 md:-left-30 top-1/2 -translate-y-1/2 h-28 md:h-36 w-60 md:w-80 opacity-35 md:opacity-40 pointer-events-none"
			/>
			<Image
				src={'/assets/images/pattern/pattern-white.png'}
				width={20}
				height={20}
				alt=""
				loading="lazy"
				unoptimized
				className="absolute -right-20 md:-right-30 top-1/2 -translate-y-1/2 h-28 md:h-36 w-60 md:w-80 opacity-35 md:opacity-40 rotate-180 pointer-events-none"
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="flex flex-col items-center justify-center gap-6">
					<h2 className="text-sm md:text-base font-bold text-kutakembaran-white tracking-wider text-center">
						Berkolaborasi dan Bersinergi Bersama
					</h2>

					<CollaborationItem />
				</div>
			</div>
		</section>
	);
};
