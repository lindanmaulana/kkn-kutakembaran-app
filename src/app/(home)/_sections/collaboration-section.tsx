import Image from 'next/image';
import { COLLABORATIONS_DATA } from '@/app/(home)/_constants/collaboration-data';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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

					<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl">
						{COLLABORATIONS_DATA.map((collaborate) => (
							<Tooltip key={collaborate.id}>
								<TooltipTrigger>
									<article className="bg-white/40 backdrop-blur-2xl rounded-lg p-2 transition-all hover:bg-white/60 hover:scale-105 active:scale-95 cursor-pointer shadow-sm">
										<a
											href={collaborate.websiteUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="block"
										>
											<div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden p-1 flex items-center justify-center bg-white/80">
												<Image
													src={collaborate.imageUrl}
													alt={collaborate.name}
													fill
													loading="lazy"
													unoptimized
													className="object-contain p-1"
												/>
											</div>
										</a>
									</article>
								</TooltipTrigger>

								<TooltipContent
									side="top"
									className="hidden sm:block bg-slate-900 text-white border-slate-800 text-xs font-medium px-2.5 py-1.5 shadow-md"
								>
									<p>{collaborate.name}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
