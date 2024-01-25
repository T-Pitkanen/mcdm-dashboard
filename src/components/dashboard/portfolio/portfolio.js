/* WITHOUT BUTTON - ORIGINAL
'use client';

import ImagesContainer from '../imagesContainer/imagesContainer';
import DevSwiper from '@/components/dev/devSwiper/devSwiper';

const Portfolio = ({ images, authorName }) => {
	return (
		<div>
			{' '}
			<ImagesContainer images={images} authorName={authorName} />
			<DevSwiper images={images} />
		</div>
	);
};

export default Portfolio;  */

'use client';

import { useState } from 'react';
import ImagesContainer from '../imagesContainer/imagesContainer';
import DevSwiper from '@/components/dev/devSwiper/devSwiper';
import styles from './portfolio.module.css';

const Portfolio = ({ images, authorName }) => {
	const [isSwiperVisible, setIsSwiperVisible] = useState(true);

	return (
		<div>
			<button
				className={styles.switchBtn}
				onClick={() => setIsSwiperVisible(!isSwiperVisible)}
			>
				Switch
			</button>
			{isSwiperVisible ? (
				<DevSwiper images={images} />
			) : (
				<ImagesContainer images={images} authorName={authorName} />
			)}
		</div>
	);
};

export default Portfolio;
