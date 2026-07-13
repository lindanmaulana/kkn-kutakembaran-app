import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ_DATA } from '@/app/(home)/_constants/faq-data';

export const FaqSection = () => {
	const faqData = FAQ_DATA.slice(0, 5);
	return (
		<section className="relative py-12 md:py-20 bg-slate-50 px-4 sm:px-6" aria-labelledby="faq-heading">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
					<div className="w-full lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
						<span className="text-sm md:text-base font-semibold text-gray-700 tracking-wider block">
							Tanya Jawab
						</span>

						<h2
							id="faq-heading"
							className="text-2xl sm:text-3xl md:text-4xl font-bold text-kutakembaran-blue leading-tight text-center lg:text-left"
						>
							Pertanyaan Umum <span className="text-kutakembaran-gold">Seputar KKN</span>
						</h2>

						<p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl mb-6 lg:mb-8">
							Di sini Anda dapat menemukan jawaban atas berbagai pertanyaan umum seputar program kerja dan
							inisiatif kami dalam mendukung pemberdayaan masyarakat desa. Jika ada hal lain yang ingin
							ditanyakan, silakan hubungi kami.
						</p>

						<Button
							variant={'outline'}
							className="p-6 rounded-full inline-flex items-center gap-2 bg-kutakembaran-white/20 hover:bg-kutakembaran-gold/20 cursor-pointer text-black hover:text-black border-black/10 hover:border-kutakembaran-gold font-medium text-sm transition-global hover:scale-105 shadow-sm"
						>
							<Info /> Lihat Semua FAQ
						</Button>
					</div>

					<div className="w-full lg:w-1/2">
						<Accordion className="w-full space-y-2">
							{faqData.map((item) => (
								<AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
									<AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-kutakembaran-blue py-4">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-xs md:text-sm text-gray-600 leading-relaxed pb-4">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};
