import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareHeart } from 'lucide-react';
import { GuestBookFormCreate } from '@/app/epilogue/_components/elements/guest-book-form-create';

export const GuestBookSection = () => {
	return (
		<section
			id="guestbook"
			className="relative w-full overflow-hidden flex flex-col items-center justify-center py-20 bg-black text-white"
		>
			<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[140px] rounded-full" />

			<div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
				<div className="w-full flex items-center justify-center flex-col text-center mb-12">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
						<MessageSquareHeart className="size-3.5" />
						Buku Tamu Digital
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 max-w-4xl">
						Tulis Kesan & Doa Kamu<span className="text-blue-500">.</span>
					</h2>

					<p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mx-auto">
						Bagikan pesan, doa, dan kenangan singkat untuk mahasiswa KKN Kelompok 5 maupun warga Desa
						Kutakembaran.
					</p>
				</div>

				<div className="max-w-2xl mx-auto">
					<Card className="bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60">
						<CardContent className="p-6 sm:p-8">
							<GuestBookFormCreate />
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
