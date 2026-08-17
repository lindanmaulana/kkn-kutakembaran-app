import { cn } from '@/lib/utils';
import { kknImpactMetrics } from '../_data/kkn-impact-metrics.data';

export const ImpactMetricsSection = () => {
	return (
		<section className="relative w-full overflow-hidden flex items-center justify-center py-16 bg-black">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

			<div className="z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
					{kknImpactMetrics.map((metric) => (
						<article
							key={metric.id}
							className={cn(
								'group relative overflow-hidden rounded-2xl border border-white/10 bg-liner-to-b from-white/8 to-white/2 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between',
								metric.id === 'goal-2' && 'md:col-span-2 lg:col-span-2',
								metric.id === 'goal-5' && 'md:col-span-2 lg:col-span-1',
							)}
						>
							<div className="absolute inset-x-0 top-0 h-0.5 bg-liner-to-r from-transparent via-amber-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							<div className="space-y-5">
								<div className="flex items-center justify-between gap-3">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-400 shadow-inner transition-colors group-hover:border-amber-400/30 group-hover:bg-amber-400/10">
										<metric.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
									</div>

									{metric.category && (
										<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase group-hover:text-amber-300 group-hover:border-amber-400/20 transition-colors">
											{metric.category}
										</span>
									)}
								</div>

								<div className="space-y-1">
									<div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
										{metric.value}
									</div>
									<p className="text-sm font-medium text-slate-400 leading-snug">{metric.label}</p>
								</div>
							</div>

							<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
								<span>Capaian KKN Kolaboratif</span>
								<span className="text-amber-400/80 font-mono">05</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
