import { cn } from '@/lib/utils';
import Image from 'next/image';
import { OBJECTIVE_GOALS } from '../_constants/objective-goal';

export const ObjectiveSection = () => {
	return (
		<section className="relative py-12 md:py-20 bg-white rounded-b-[46px] overflow-hidden" aria-labelledby="objective-heading">
			<Image
				src={'/assets/images/pattern/pattern-double-blue.png'}
				width={120}
				height={120}
				alt="pattern-double-blue"
				loading="lazy"
				className="w-1/3 h-60 opacity-10 absolute -right-62 top-20"
			/>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
				<div className="w-full flex-1 text-center md:text-left">
					<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block mb-2">
						Tujuan Strategis KKN
					</span>

					<h2
						id="objective-heading"
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-blue leading-tight mb-4 md:mb-6 max-w-4xl"
					>
						Upaya Sinergis Kami untuk
						<span className="text-kutakembaran-gold block lg:inline"> Membangun Desa Mandiri</span>
					</h2>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
						KKN Kolaboratif berkomitmen untuk mengakselerasi potensi Sumber Daya Manusia (SDM) dan Sumber
						Daya Alam (SDA) di pedesaan, demi membangun fondasi masyarakat Kabupaten Kuningan yang maju,
						cerdas, dan tangguh. Melalui program pengabdian yang terintegrasi dan berkelanjutan, kami
						berupaya mewujudkan desa yang lebih mandiri dan kuat.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{OBJECTIVE_GOALS.map((goal) => (
						<article
							key={goal.id}
							className={cn(
								'bg-white shadow-sm border border-gray-100/80 p-6 md:p-8 rounded-xl space-y-4 flex flex-col justify-between',
								goal.id === 'goal-2' && 'md:col-span-2 lg:col-span-2',
								goal.id === 'goal-5' && 'md:col-span-2 lg:col-span-1',
							)}
						>
							<div className="space-y-4">
								<div className="border border-gray-100 rounded-2xl w-14 h-14 p-3 flex items-center justify-center bg-slate-50 text-kutakembaran-blue shadow-inner">
									<goal.icon className="size-6 shrink-0" />
								</div>

								<h3 className="text-xl font-bold text-gray-950 tracking-tight leading-snug">
									{goal.title}
								</h3>
								<p className="text-sm md:text-base text-gray-600/90 leading-relaxed font-normal">
									{goal.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
