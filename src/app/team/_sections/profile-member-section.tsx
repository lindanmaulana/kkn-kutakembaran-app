import { MemberRole } from '@/types/member-role';
import { ProfileCard } from '../_components/profile-card';
import { TEAM_MEMBERS } from '../_const/profile-member-data';

export const ProfileMemberSection = () => {
	const dpl = TEAM_MEMBERS.find((member) => member.role === MemberRole.DPL);
	const koordes = TEAM_MEMBERS.find((member) => member.role === MemberRole.KORDES);
	const wakordes = TEAM_MEMBERS.find((member) => member.role === MemberRole.WAKORDES);
	const teams = TEAM_MEMBERS.filter(
		(member) =>
			member.role !== MemberRole.DPL && member.role !== MemberRole.KORDES && member.role !== MemberRole.WAKORDES,
	);

	return (
		<section className="py-16 md:py-24 px-4 bg-gray-50/50">
			<div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
				<div className="text-center max-w-3xl mx-auto space-y-3">
					<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
						Kenali Tim KKN KutaKembaran 2026
					</h2>
					<p className="text-base md:text-lg font-normal text-gray-600 leading-relaxed">
						Kolaborasi dari berbagai disiplin ilmu untuk mengabdi kepada masyarakat. Inilah jajaran
						koordinator dan penanggung jawab divisi pelaksana program kerja di Desa Kuta Kembaran.
					</p>
				</div>

				<div className="space-y-10">
					<div className="flex justify-center">
						<ProfileCard member={dpl} />
					</div>
					<div className="flex justify-center">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-2xl">
							<ProfileCard member={koordes} />
							<ProfileCard member={wakordes} />
						</div>
					</div>

					<hr className="border-gray-200 max-w-5xl mx-auto" />

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{teams.map((member) => (
							<ProfileCard key={member.id} member={member} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
