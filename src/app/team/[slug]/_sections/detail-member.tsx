'use client';

import { Member } from '@/app/team/[slug]/_components/member';
import { MemberDefault } from '@/app/team/[slug]/_components/member-default';
import { TEAM_MEMBERS } from '@/app/team/_const/profile-member-data';
import { MemberRole } from '@/types/member-role';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MemberCarousel } from '@/app/team/[slug]/_components/member-carousel';

interface DetailMemberProps {
	slug: string;
}

export const DetailMember = ({ slug = '/assets/images/default-avatar.png' }: DetailMemberProps) => {
	const member = TEAM_MEMBERS.find((member) => member.slug === slug);
	const filteredMembers = TEAM_MEMBERS.filter((m) => m.id !== member?.id && m.role !== MemberRole.DPL);

	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="max-w-6xl mx-auto px-4 space-y-8">
				<div className="flex items-center">
					<Link
						href="/team"
						className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-200/80 bg-gray-50/50 text-sm font-semibold text-gray-700 shadow-sm hover:shadow hover:bg-white hover:border-kutakembaran-gold hover:text-kutakembaran-gold transition-all duration-300"
					>
						<div className="flex items-center justify-center size-6 rounded-full bg-gray-200/70 text-gray-600 group-hover:bg-kutakembaran-gold group-hover:text-white transition-colors duration-300">
							<ArrowLeft className="size-3.5 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
						</div>
						<span className="tracking-wide">Kembali ke Daftar Tim</span>
					</Link>
				</div>

				{member ? <Member member={member} /> : <MemberDefault />}
				<MemberCarousel members={filteredMembers} />
			</div>
		</section>
	);
};
