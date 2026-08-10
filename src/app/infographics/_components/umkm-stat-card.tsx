import { UmkmStatItem } from '@/app/infographics/_constants/umkm-stats-data';

interface UmkmStatCardProps {
	data: UmkmStatItem;
	className?: string;
}

export const UmkmStatCard = ({ data, className = '' }: UmkmStatCardProps) => {
	const Icon = data.icon;

	return (
		<div
			className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md ${className}`}
		>
			<div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-slate-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="flex items-center justify-between gap-3">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900">
					<Icon className="h-5 w-5" />
				</div>

				<span className="inline-flex items-center rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-slate-100 group-hover:text-slate-700">
					{data.category}
				</span>
			</div>

			<div className="mt-4 flex flex-col gap-0.5">
				<div className="flex items-baseline justify-between gap-2">
					<p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.value}</p>

					{data.trend && (
						<span
							className={`inline-flex items-center text-xs font-semibold ${
								data.trend.isPositive ? 'text-emerald-600' : 'text-rose-600'
							}`}
						>
							{data.trend.isPositive ? '↑' : '↓'} {data.trend.value}
						</span>
					)}
				</div>

				<p className="text-sm font-medium leading-snug text-slate-600">{data.label}</p>
			</div>
			<div className="mt-4 border-t border-slate-100 pt-3">
				<p className="text-xs leading-relaxed text-slate-500">{data.description}</p>
			</div>
		</div>
	);
};
