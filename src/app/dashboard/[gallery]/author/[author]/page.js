import {
	fetchImagesForAuthor,
	fetchGalleries,
	fetchAuthors,
} from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';
import DevSwiper from '@/components/dev/devSwiper/devSwiper';
import ImagesContainer from '@/components/dashboard/imagesContainer/imagesContainer';
import Portfolio from '@/components/dashboard/portfolio/portfolio';

export default async function Page({ params }) {
	const authorName = decodeURIComponent(params.author);
	const images = await fetchImagesForAuthor(authorName);
	const galleries = await fetchGalleries();
	const authors = await fetchAuthors();

	return (
		<main className={styles.page}>
			<div className={styles.content}>
				{' '}
				<CombinedNav galleries={galleries} authors={authors} />
				<Portfolio images={images} authorName={authorName} />
			</div>
		</main>
	);
}
