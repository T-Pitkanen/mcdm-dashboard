'use client';

import { useState } from 'react';
import Image from 'next/image';
import DevDebugJson from '../devDebugJson/devBugJson';
import styles from './devGalleryImage.module.css';
import MetaOffOn from '@/components/metaOffOn/metaOffOn';
import DevImageMeta from '../devImageMeta/devImageMeta';

const DevGalleryImage = ({ image }) => {
	const [showMeta, setShowMeta] = useState(false);

	const toggleMeta = () => {
		setShowMeta(!showMeta);
	};

	let displayDetails = showMeta ? (
		<DevImageMeta meta={image.meta}></DevImageMeta>
	) : null;

	return (
		<div>
			{/*
            <Image src={image.path} alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`} className={styles.image} width={image.width} height={image.height} />
            
    
            <DevImageMeta meta={image.meta}></DevImageMeta> 
      */}

			<Image
				src={image.path}
				alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`}
				className={styles.image}
				width={image.width}
				height={image.height}
			/>

			{displayDetails}
			<MetaOffOn onClick={toggleMeta}></MetaOffOn>
		</div>
	);
};

export default DevGalleryImage;
