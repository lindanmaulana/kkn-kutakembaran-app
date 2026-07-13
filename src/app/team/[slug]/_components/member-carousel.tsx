'use client';
import { TeamMember } from '@/app/team/_const/profile-member-data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { IMAGE_DEFAULT } from '@/const/default';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

interface MemberCarouselProps {
	members: TeamMember[];
}
export const MemberCarousel = ({ members }: MemberCarouselProps) => {
	return (
		<div className="pt-16 border-t border-gray-100 space-y-8">
			<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-2xl font-bold text-gray-950 tracking-tight">Anggota Tim Lainnya</h3>
					<p className="text-sm text-gray-500">
						Kenali mahasiswa lainnya yang tergabung dalam KKN Kolaboratif.
					</p>
				</div>
			</div>

			<Carousel
				plugins={[
					Autoplay({
						delay: 3000,
						stopOnInteraction: true,
					}),
				]}
				className="w-full relative group/carousel"
				opts={{
					align: 'start',
					loop: true,
				}}
			>
				<CarouselContent className="-ml-4">
					{members.map((otherMember) => (
						<CarouselItem
							key={otherMember.id}
							className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
						>
							<Link
								href={`/team/${otherMember.slug}`}
								className="group p-4 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-xl transition-all duration-300 space-y-3 block shadow-sm hover:shadow"
							>
								<div className="aspect-square w-full rounded-lg bg-gray-200 overflow-hidden relative">
									<Image
										src={otherMember.imageUrl || IMAGE_DEFAULT}
										alt={otherMember.name}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div>
									<h4 className="font-bold text-gray-950 text-base line-clamp-1 group-hover:text-kutakembaran-gold transition-colors">
										{otherMember.name}
									</h4>
									<p className="text-xs text-gray-500 font-medium">{otherMember.role}</p>
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />
				<CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />
			</Carousel>
		</div>
	);
};
