import {
	fetchImagesForAuthor,
	fetchAuthorByNicUrl,
	fetchGalleries,
	fetchAuthors,
} from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';
import CombinedNav from '@/components/dashboard/portfolioComb.js/portfolioComb';

export default async function Page({ params }) {
	let fetchedAuthor = await fetchAuthorByNicUrl(params.author);
	let authorName = decodeURIComponent(params.author);
	const images = await fetchImagesForAuthor(authorName);
	let galleries = await fetchGalleries();
	const authors = await fetchAuthors();

	console.log(authorName);

	return (
		<main className={styles.page}>
			{/* <p>Author Page - {authorName} </p> */}
			<div className={styles.content}>
				{' '}
				<CombinedNav galleries={galleries} authors={authors} />
				<div className={styles.images}>
					{images.map((image, index) => (
						<Image
							width={300}
							height={300}
							key={index}
							src={image.path}
							alt={image.description}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
