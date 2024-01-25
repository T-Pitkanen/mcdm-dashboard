import { poppinsFont } from '@/utils/fonts';
import styles from './page.module.css';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';
import Portfolio from '@/components/dashboard/portfolio/portfolio';
import Images from '@/components/dashboard/images/images';
import {
	fetchGalleries,
	fetchAuthors,
	fetchImagesForAuthor,
} from '@/lib/data.service';

export default async function Page() {
	const galleries = await fetchGalleries();
	const authors = await fetchAuthors();
	const images = await fetchImagesForAuthor('');

	return (
		<main className={`${styles.page} ${poppinsFont.className}`}>
			<div className={styles.content}>
				{' '}
				<CombinedNav galleries={galleries} authors={authors} images={images} />
				<Portfolio images={images} />
			</div>
		</main>	
	);
}
