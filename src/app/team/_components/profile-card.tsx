import Link from 'next/link';
import { TeamMember } from '@/app/team/_const/profile-member-data';
import Image from 'next/image';
import { IMAGE_DEFAULT } from '@/const/default';
import { ProfileCardDefault } from './profile-card-default';
import { ArrowUpRight } from 'lucide-react';

interface ProfileCardProps {
	member?: TeamMember;
}

export const ProfileCard = ({ member }: ProfileCardProps) => {
	if (!member) return <ProfileCardDefault />;
	return (
		<Link
			key={member.id}
			href={`/team/${member.slug}`}
			className="group block p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 space-y-4"
		>
			<figure className="relative aspect-square w-full max-w-60 mx-auto rounded-xl overflow-hidden bg-gray-50">
				<div className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm group-hover:bg-kutakembaran-gold group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
					<ArrowUpRight className="size-5 transition-transform duration-300" />
				</div>

				<Image
					src={member.imageUrl || IMAGE_DEFAULT}
					width={240}
					height={240}
					alt={member.name}
					loading="lazy"
					unoptimized
					className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
				/>
			</figure>

			<div className="space-y-1 px-1">
				<h3 className="text-lg font-bold text-gray-950 tracking-tight group-hover:text-kutakembaran-gold transition-colors duration-300">
					{member.name}
				</h3>
				<p className="text-sm font-medium text-gray-500 tracking-wide">{member.role}</p>
			</div>
		</Link>
	);
};
