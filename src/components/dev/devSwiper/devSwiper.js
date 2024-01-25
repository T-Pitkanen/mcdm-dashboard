'use client';
import styles from './devSwiper.module.css';
import { register } from 'swiper/element/bundle';

import Image from 'next/image';

import { useEffect } from 'react';

const DevSwiper = ({ images }) => {
	useEffect(() => {
		console.log('swiper registered');
		register();
	}, []);

	return (
		<div className={styles.swiperWrapper}>
			<swiper-container
				className={styles.swiperContainer}
				slides-per-view="1"
				navigation="true"
				scrollbar="true"
				rewind="true"
				longSwipes="true"
				speed="1000"
			>
				{images.map((image) => {
					return (
						<swiper-slide className={styles.swiperSlide} key={image._id}>
							<Image
								className={styles.swiperImage}
								src={image.path}
								alt={image.name}
								width={500}
								height={500}
							></Image>
						</swiper-slide>
					);
				})}
			</swiper-container>
		</div>
	);
};

export default DevSwiper;
