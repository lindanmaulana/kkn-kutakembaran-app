'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { COLLABORATIONS_DATA } from '@/app/(home)/_constants/collaboration-data';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
} as const;

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 15,
		},
	},
} as const;

export const CollaborationItem = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-50px' }}
			className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl"
		>
			{COLLABORATIONS_DATA.map((collaborate) => (
				<Tooltip key={collaborate.id}>
					<TooltipTrigger>
						<motion.article
							variants={itemVariants}
							className="bg-white/40 backdrop-blur-2xl rounded-lg p-2 transition-all hover:bg-white/60 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
						>
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
										className="object-contain p-1"
									/>
								</div>
							</a>
						</motion.article>
					</TooltipTrigger>

					<TooltipContent
						side="top"
						className="hidden sm:block bg-slate-900 text-white border-slate-800 text-xs font-medium px-2.5 py-1.5 shadow-md"
					>
						<p>{collaborate.name}</p>
					</TooltipContent>
				</Tooltip>
			))}
		</motion.div>
	);
};
