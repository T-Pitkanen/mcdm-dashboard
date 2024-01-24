import {
	fetchImagesForAuthor,
	fetchAuthorByNicUrl,
	fetchGalleries,
	fetchAuthors,
} from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';
// import ImagesContainer from '@/components/dashboard/imagesContainer/imagesContainer';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';

export default async function Page({ params }) {
	let authorName = decodeURIComponent(params.author);
	const images = await fetchImagesForAuthor(authorName);
	let galleries = await fetchGalleries();
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
								height={700}
								key={index}
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
