import Image from 'next/image';
import styles from './imagesContainer.module.css';

const ImagesContainer = ({ images, authorName }) => {
	return (
		<div className={styles.imagesContainer}>
			<p>{authorName}</p>
			<div className={styles.images}>
				{images.map((image, index) => (
					<Image
						width={400}
						height={400}
						key={index}
						src={image.path}
						alt={image.description}
					/>
				))}
			</div>
		</div>
	);
};

export default ImagesContainer;
