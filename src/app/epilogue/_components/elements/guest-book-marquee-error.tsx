import { AlertCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GuestBookMarqueeErrorProps {
	onRetry?: () => void;
}

export function GuestBookMarqueeError({ onRetry }: GuestBookMarqueeErrorProps) {
	return (
		<div className="flex lg:hidden w-full relative h-44 items-center justify-center overflow-hidden mt-2 px-4">
			<div className="w-full max-w-sm rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-2">
				<div className="flex items-center gap-1.5 text-rose-400">
					<AlertCircle className="size-4 shrink-0" />
					<span className="text-xs font-semibold">Gagal memuat pesan</span>
				</div>
				<p className="text-[11px] text-slate-400">Terjadi kesalahan saat mengambil daftar pesan kenangan.</p>

				{onRetry && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={onRetry}
						className="h-7 text-xs text-slate-300 hover:text-white hover:bg-white/10 gap-1.5 mt-1 rounded-lg"
					>
						<RotateCcw className="size-3" />
						Coba Lagi
					</Button>
				)}
			</div>
		</div>
	);
}
