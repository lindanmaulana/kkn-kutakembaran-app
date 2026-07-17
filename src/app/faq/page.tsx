import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
	FAQ_LAW_DIGITAL_LITERACY,
	FAQ_MECHANISM_EXECUTION,
	FAQ_NUTRITION_FOOD_SECURITY,
	FAQ_PARTNERSHIP_COLLABORATION
} from '@/const/faq-data';

const FaqPage = () => {
	return (
		<>
			<section className="py-8 md:py-16 bg-gray-50/50 border-b">
				<div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12">
					<div className="flex flex-col gap-4 text-center md:text-left max-w-4xl mx-auto md:mx-0">
						<div className="space-y-2">
							<span className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-black/60">
								FAQ KKN Kolaboratif Desa Kutakembaran
							</span>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
								Kupas Tuntas Semua Pertanyaan untuk{' '}
								<span className="text-kutakembaran-gold block sm:inline">
									Mengenal KKN Kolaboratif Desa Kutakembaran
								</span>{' '}
								Lebih Dekat
							</h2>
						</div>

						<p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
							Temukan jawaban lengkap atas berbagai pertanyaan mengenai program kerja, inisiatif
							strategis, dan kontribusi nyata kami dalam membangun serta meningkatkan literasi masyarakat
							pedesaan menuju desa sehat, unggul, sejahtera, mandiri, dan berwawasan global.
						</p>
					</div>

					<div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-gray-100 pt-8">
							<h3 className="text-lg md:text-xl font-bold text-kutakembaran-blue">
								Mekanisme Pelaksanaan & Pendidikan
							</h3>
							<div className="md:col-span-2">
								<Accordion className="w-full space-y-2">
									{FAQ_MECHANISM_EXECUTION.map((item) => (
										<AccordionItem
											key={item.id}
											value={item.id}
											className="border-b border-gray-200"
										>
											<AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-kutakembaran-blue py-4 transition-colors">
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

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-gray-100 pt-8">
							<h3 className="text-lg md:text-xl font-bold text-kutakembaran-blue">
								Edukasi Kesehatan & Lingkungan
							</h3>
							<div className="md:col-span-2">
								<Accordion className="w-full space-y-2">
									{FAQ_NUTRITION_FOOD_SECURITY.map((item) => (
										<AccordionItem
											key={item.id}
											value={item.id}
											className="border-b border-gray-200"
										>
											<AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-kutakembaran-blue py-4 transition-colors">
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

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-gray-100 pt-8">
							<h3 className="text-lg md:text-xl font-bold text-kutakembaran-blue">
								Literasi Hukum & Digital Desa
							</h3>
							<div className="md:col-span-2">
								<Accordion className="w-full space-y-2">
									{FAQ_LAW_DIGITAL_LITERACY.map((item) => (
										<AccordionItem
											key={item.id}
											value={item.id}
											className="border-b border-gray-200"
										>
											<AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-kutakembaran-blue py-4 transition-colors">
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

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-gray-100 pt-8">
							<h3 className="text-lg md:text-xl font-bold text-kutakembaran-blue">
								Pemberdayaan Ekonomi & Kemitraan
							</h3>
							<div className="md:col-span-2">
								<Accordion className="w-full space-y-2">
									{FAQ_PARTNERSHIP_COLLABORATION.map((item) => (
										<AccordionItem
											key={item.id}
											value={item.id}
											className="border-b border-gray-200"
										>
											<AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-kutakembaran-blue py-4 transition-colors">
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
				</div>
			</section>
		</>
	);
};

export default FaqPage;
