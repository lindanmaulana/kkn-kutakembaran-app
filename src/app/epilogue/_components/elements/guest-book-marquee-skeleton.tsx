import { Skeleton } from '@/components/ui/skeleton';

export function GuestBookMarqueeSkeleton() {
	return (
		<div className="flex lg:hidden w-full relative h-44 items-center justify-center overflow-hidden mt-2">
			<div className="flex gap-3 w-full animate-pulse px-4">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="w-72 shrink-0 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm flex flex-col justify-between h-26.25"
					>
						<div className="space-y-2">
							<Skeleton className="h-3 w-full bg-slate-800/80 rounded" />
							<Skeleton className="h-3 w-3/4 bg-slate-800/80 rounded" />
						</div>

						<div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2">
							<Skeleton className="h-3 w-20 bg-slate-800/80 rounded" />
							<Skeleton className="h-2.5 w-14 bg-slate-800/80 rounded" />
						</div>
					</div>
				))}
			</div>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-black to-transparent z-10" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-black to-transparent z-10" />
		</div>
	);
}
