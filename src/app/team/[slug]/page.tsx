import { DetailMember } from '@/app/team/[slug]/_sections/detail-member';

interface DetailTeamPageProps {
	params: Promise<{ slug: string }>;
}

const DetailTeamPage = async ({ params }: DetailTeamPageProps) => {
	const { slug } = await params;

	return (
		<>
			<DetailMember slug={slug} />
		</>
	);
};

export default DetailTeamPage;
