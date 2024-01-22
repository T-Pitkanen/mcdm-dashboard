import { poppinsFont } from '@/utils/fonts';
import styles from './page.module.css';
import DashboardNav from '@/components/dashboard/navigation/navigation';
import Sidenav from '@/components/dashboard/sidenav/sidenav';
import Images from '@/components/dashboard/images/images';
import Portfolio from '@/components/dashboard/portfolio/portfolio';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';
import {
	fetchGalleries,
	fetchAuthors,
	fetchImagesForAuthor,
} from '@/lib/data.service';

export default async function Page() {
	const galleries = await fetchGalleries();
	const authors = await fetchAuthors();
	const images = await fetchImagesForAuthor('Lena Riis');

	return (
		<main className={`${styles.page} ${poppinsFont.className}`}>
			<div className={styles.content}>
				{' '}
				<CombinedNav galleries={galleries} authors={authors} images={images} />
				<div className={styles.images}>
					<p>IMAGES</p>
				</div>
			</div>
		</main>
	);
}
