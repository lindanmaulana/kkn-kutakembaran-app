import { NEWS_DATA } from '@/const/news-data';
import { NewsDetailContentSection } from './_sections/news-detail-content-section';
import { Metadata } from 'next';
import { IMAGE_DEFAULT } from '@/const/default';

interface NewsDetailPageProps {
	params: Promise<{ slug: string }>;
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

    return {
        title: `${article.title} | KKN Kuta Kembaran`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.date, 
            authors: [article.author],
            images: [
                {
                    url: article.imageUrl && article.imageUrl.trim() !== '' ? article.imageUrl : IMAGE_DEFAULT,
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
            images: [article.imageUrl && article.imageUrl.trim() !== '' ? article.imageUrl : IMAGE_DEFAULT],
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
