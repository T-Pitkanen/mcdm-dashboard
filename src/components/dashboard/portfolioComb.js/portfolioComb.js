'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './portfolioComb.module.css';
import Link from 'next/link';

const CombinedNav = ({ galleries, authors }) => {
	const pathname = usePathname();
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedGallery, setSelectedGallery] = useState(null);
	const [selectedAuthor, setSelectedAuthor] = useState(null);

	useEffect(() => {
		console.log('Authors:', authors);
	}, [authors]);

	const handleGalleryClick = (galleryName) => {
		console.log('Gallery:', galleryName);
		setSelectedGallery(galleryName);
		setSelectedAuthor(null);
	};

	const handleAuthorClick = (author) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set('author', author.author);
		setSearchParams(newParams);
	};

	const filteredAuthors = selectedGallery
		? authors.filter((author) => {
				const isMatch = author.gallery === selectedGallery;
				console.log(`Checking ${author.author}: ${isMatch}`);
				return isMatch;
		  })
		: [];

	console.log('Selected gallery:', selectedGallery);
	console.log('Filtered authors:', filteredAuthors);

	return (
		<div className={styles.combinedNav}>
			<div className={styles.navigation}>
				<div className={styles.navbot}>
					{galleries.map((gallery, index) => (
						<button
							key={index}
							onClick={() => handleGalleryClick(gallery.name)}
						>
							{gallery.name}
						</button>
					))}
				</div>
			</div>

			<div className={styles.content}>
				{' '}
				<div className={styles.sidenav}>
					{filteredAuthors.map((author, index) => (
						<Link
							href={`/dashboard/${selectedGallery}/author/${author.author}`}
							key={index}
						>
							<button onClick={() => setSelectedAuthor(author)}>
								{author.author}
							</button>
						</Link>
					))}
				</div>
	
			</div>
		</div>
	);
};

export default CombinedNav;
