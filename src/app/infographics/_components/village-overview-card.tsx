import { VillageOverviewItem } from '../_constants/village-overview-data';

interface VillageOverviewCardProps {
	overview: VillageOverviewItem;
}

export const VillageOverviewCard = ({ overview }: VillageOverviewCardProps) => {
	const Icon = overview.icon;

	return (
		<div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
			<div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-slate-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900">
				<Icon className="h-5 w-5" />
			</div>

			<div className="mt-4 flex flex-col gap-0.5">
				<span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
					{overview.category}
				</span>
				<h4 className="text-lg font-bold tracking-tight text-slate-900">{overview.title}</h4>
			</div>

			<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
				<span className="text-xs text-slate-500">{overview.subtitle}</span>
				<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
					{overview.badgeText}
				</span>
			</div>
		</div>
	);
};
