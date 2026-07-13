import { TeamMember } from '@/app/team/_const/profile-member-data';
import { IMAGE_DEFAULT } from '@/const/default';
import Image from 'next/image';

interface MemberProps {
	member: TeamMember;
}
export const Member = ({ member }: MemberProps) => {
	return (
		<div className="grid md:grid-cols-12 gap-12 items-start">
			<div className="md:col-span-4">
				<figure className="relative aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
					<Image
						src={member.imageUrl || IMAGE_DEFAULT}
						alt={member.name}
						fill
						className="object-cover hover:scale-105 transition-transform duration-700"
						priority
					/>
				</figure>
			</div>

			<div className="md:col-span-8 space-y-6">
				<div className="space-y-1">
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">{member.name}</h1>
					<p className="text-lg font-medium text-kutakembaran-gold">{member.role}</p>
				</div>

				<div className="flex flex-wrap gap-3">
					<span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
						{member.university}
					</span>
					<span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
						{member.major}
					</span>
				</div>

				<div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-lg">
					<p>{member.description}</p>

					<div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-kutakembaran-gold">
						<h4 className="font-bold text-gray-900 mb-2">Informasi Alamat</h4>
						<p className="text-base">{member.originAddress}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
