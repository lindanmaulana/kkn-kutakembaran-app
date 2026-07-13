'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TargetProgram } from '@/app/(home)/_constants/target-data';

// 1. Buat sub-komponen Card terpisah agar state-nya independen
export const ProgramCard = ({ target }: { target: TargetProgram }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div
			className="group h-100 md:h-112.5 w-full perspective-[1000px] cursor-pointer"
			onClick={() => setIsFlipped(!isFlipped)}
		>
			<div
				className={cn(
					'relative w-full h-full rounded-xl shadow-md transition-all duration-700 transform-3d',
					isFlipped
						? 'transform-[rotateY(180deg)]'
						: 'lg:group-hover:transform-[rotateY(180deg)] transform-[rotateY(0deg)]',
				)}
			>
				<div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden backface-hidden transform-[translateZ(0)]">
					<Image src={target.imageUrl} fill alt={target.title} unoptimized className="object-cover" />
					<div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center text-white">
						<h3 className="text-lg md:text-xl font-bold mb-1">{target.title}</h3>
						<p className="text-xs opacity-90">{target.description}</p>
					</div>
				</div>

				<div className="absolute inset-0 w-full h-full rounded-xl bg-kutakembaran-gold p-6 md:p-8 flex flex-col justify-start overflow-hidden backface-hidden transform-[rotateY(180deg)_translateZ(0)]">
					<Image
						src={'/assets/images/pattern/pattern-blue.png'}
						width={20}
						height={20}
						alt="pattern-blue"
						loading="lazy"
						unoptimized
						className="size-48 md:size-60 absolute -bottom-20 -right-16 md:-bottom-28 md:-right-24 opacity-20 pointer-events-none"
					/>

					<div className="relative z-10 space-y-2 md:space-y-3">
						<h3 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight leading-snug">
							{target.title}
						</h3>
						<p className="text-xs md:text-base text-gray-900/90 leading-relaxed font-normal">
							{target.details}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};