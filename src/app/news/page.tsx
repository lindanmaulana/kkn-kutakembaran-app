import { BlogSection } from '@/app/news/_sections/blog-section';
import { VillageNewsSection } from '@/app/news/_sections/village-news-section';
import { NewsArchive } from '@/app/news/_sections/news-archive';

const NewsPage = () => {
	return (
		<>
			<BlogSection />
            <VillageNewsSection />
            <NewsArchive />
		</>
	);
};

export default NewsPage;
