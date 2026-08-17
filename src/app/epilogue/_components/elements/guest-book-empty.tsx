import { MessageSquareDashed } from 'lucide-react';

export function GuestBookEmpty() {
	return (
		<>
			<div className="hidden lg:flex w-80 shrink-0 relative h-90 xl:h-100 flex-col items-center justify-center p-6 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
				<div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-inner">
					<MessageSquareDashed className="size-6 text-slate-400" />
				</div>
				<h4 className="text-sm font-semibold text-white">Belum Ada Pesan</h4>
				<p className="text-xs text-slate-400 mt-1 max-w-50 leading-relaxed">
					Jadilah orang pertama yang meninggalkan jejak kenangan di sini!
				</p>
			</div>

			<div className="flex lg:hidden w-full relative h-44 items-center justify-center p-4 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm mt-4">
				<div className="flex flex-col items-center justify-center">
					<div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
						<MessageSquareDashed className="size-5 text-slate-400" />
					</div>
					<h4 className="text-xs font-semibold text-white">Belum Ada Pesan</h4>
					<p className="text-[11px] text-slate-400 mt-0.5 max-w-60">
						Jadilah yang pertama mengisi buku tamu kenangan.
					</p>
				</div>
			</div>
		</>
	);
}
