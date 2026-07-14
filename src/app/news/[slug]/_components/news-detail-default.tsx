import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

export const NewsDetailDefault = () => {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-md mx-auto px-4 text-center space-y-6">
				<div className="inline-flex p-4 bg-gray-50 text-gray-400 rounded-full border border-gray-100">
					<FileQuestion className="size-12 stroke-[1.5]" />
				</div>
				<div className="space-y-2">
					<h2 className="text-2xl font-bold text-gray-950 tracking-tight">Berita Tidak Ditemukan</h2>
					<p className="text-sm text-gray-500 leading-relaxed">
						Maaf, detail kabar atau artikel yang kamu cari tidak dapat dimuat atau telah dihapus.
					</p>
				</div>
				<Link
					href="/news"
					className="inline-flex items-center gap-2 px-5 py-2.5 bg-kutakembaran-blue text-white rounded-full text-sm font-medium shadow-sm shadow-kutakembaran-blue/10 hover:bg-opacity-90 transition-all duration-200"
				>
					<ArrowLeft className="size-4" />
					Kembali ke Berita
				</Link>
			</div>
		</section>
	);
};
