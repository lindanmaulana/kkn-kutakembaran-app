import { NEWS_DATA } from '@/const/news-data';
import { NewsDetailContentSection } from './_sections/news-detail-content-section';
import { Metadata } from 'next';
import { IMAGE_DEFAULT } from '@/const/default';

interface NewsDetailPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return NEWS_DATA.map((news) => ({
		slug: news.slug,
	}));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
	const { slug } = await params;

	const article = NEWS_DATA.find((news) => news.slug === slug);

	if (!article) {
		return {
			title: 'Berita Tidak Ditemukan | KKN Kuta Kembaran',
			description: 'Detail kabar atau artikel KKN tidak dapat ditemukan.',
		};
	}

	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kkn-kutakembaran.vercel.app';

	const finalImageUrl =
		article.imageUrl && article.imageUrl.trim() !== ''
			? `${baseUrl}${article.imageUrl}`
			: `${baseUrl}${IMAGE_DEFAULT}`;

	const formatToISO = (dateStr: string) => {
		try {
			const months: { [key: string]: string } = {
				Januari: '01',
				Februari: '02',
				Maret: '03',
				April: '04',
				Mei: '05',
				Juni: '06',
				Juli: '07',
				Agustus: '08',
				September: '09',
				Oktober: '10',
				November: '11',
				Desember: '12',
			};
			const parts = dateStr.split(' ');
			if (parts.length === 3) {
				const day = parts[0].padStart(2, '0');
				const month = months[parts[1]] || '01';
				const year = parts[2];
				return `${year}-${month}-${day}T00:00:00Z`;
			}
			return new Date().toISOString();
		} catch {
			return new Date().toISOString();
		}
	};

	return {
		metadataBase: new URL(baseUrl),

		title: `${article.title} | KKN Kuta Kembaran`,
		description: article.excerpt,

		alternates: {
			canonical: `/news/${article.slug}`,
		},

		robots: {
			index: true,
			follow: true,
		},

		keywords: ['KKN', 'Kuta Kembaran', article.title],

		openGraph: {
			title: article.title,
			description: article.excerpt,
			url: `/news/${article.slug}`,
			type: 'article',
			siteName: 'KKN Kuta Kembaran',
			locale: 'id_ID',
			publishedTime: formatToISO(article.date),
			modifiedTime: formatToISO(article.date),
			authors: [article.author],
			images: [
				{
					url: finalImageUrl,
					width: 1200,
					height: 630,
					alt: article.title,
				},
			],
		},

		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: article.excerpt,
			images: [finalImageUrl],
		},
	};
}

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
	const { slug } = await params;

	const article = NEWS_DATA.find((news) => news.slug === slug);

	return (
		<>
			<NewsDetailContentSection article={article} />
		</>
	);
};

export default NewsDetailPage;
