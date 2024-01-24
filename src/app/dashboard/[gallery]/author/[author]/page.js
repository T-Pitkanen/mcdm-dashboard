import {
	fetchImagesForAuthor,
	fetchGalleries,
	fetchAuthors,
} from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';

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
				<div className={styles.imagesContainer}>
					<p>{authorName}</p>
					<div className={styles.images}>
						{images.map((image, index) => (
							<Image
								width={500}
								height={500}
								key={image.path}
								src={image.path}
								alt={image.description}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
