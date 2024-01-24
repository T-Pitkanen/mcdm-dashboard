/*'use client';

import { useState, useEffect } from 'react';
import styles from './portfolioComb.module.css';
import Link from 'next/link';

const CombinedNav = ({ galleries, authors }) => {
	const [selectedGallery, setSelectedGallery] = useState(null);
	const [selectedAuthor, setSelectedAuthor] = useState(null);

	const handleGalleryClick = (galleryName) => {
		setSelectedGallery(galleryName);
		setSelectedAuthor(null);
	};

	const filteredAuthors = selectedGallery
		? authors.filter((author) => {
				const isMatch = author.gallery === selectedGallery;

				return isMatch;
		  })
		: [];

	return (
		<div className={styles.combinedNav}>
			<div className={styles.navigation}>
				<div className={styles.navbot}>
					{galleries.map((gallery, index) => (
						<button
							key={index}
							onClick={() => handleGalleryClick(gallery.name)}
						>
							{gallery.name.charAt(0).toUpperCase() + gallery.name.slice(1)}
						</button>
					))}
				</div>
			</div>

			<div className={styles.content}>
				{' '}
				<div className={styles.sidenav}>
					{selectedGallery === null && <p>Select a Gallery</p>}
					{filteredAuthors.map((author, index) => (
						<Link
							href={`/dashboard/${selectedGallery}/author/${author.author}`}
							key={index}
						>
							<button>{author.author}</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default CombinedNav;  */

'use client';

import { useState, useEffect } from 'react';
import styles from './portfolioComb.module.css';
import Link from 'next/link';

const CombinedNav = ({ galleries, authors }) => {
	const [selectedGallery, setSelectedGallery] = useState(null);

	const handleGalleryClick = (galleryName) => {
		setSelectedGallery(galleryName);
		localStorage.setItem('selectedGallery', galleryName);
	};

	const handleAllAuthorsClick = () => {
		setSelectedGallery(null);
		localStorage.removeItem('selectedGallery');
	};

	const filteredAuthors = selectedGallery
		? authors.filter((author) => author.gallery === selectedGallery)
		: authors;

	return (
		<div className={styles.combinedNav}>
			<div className={styles.navigation}>
				<div className={styles.navbot}>
					{galleries.map((gallery, index) => (
						<button
							key={index}
							onClick={() => handleGalleryClick(gallery.name)}
							className={
								selectedGallery === gallery.name ? styles.activeButton : ''
							}
						>
							{gallery.name.charAt(0).toUpperCase() + gallery.name.slice(1)}
						</button>
					))}
					<button
						onClick={handleAllAuthorsClick}
						className={selectedGallery === null ? styles.activeButton : ''}
					>
						All Authors
					</button>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.sidenav}>
					{filteredAuthors.map((author, index) => (
						<Link
							href={`/dashboard/${
								selectedGallery ? selectedGallery : 'all'
							}/author/${author.author}`}
							key={index}
						>
							<button>{author.author}</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default CombinedNav;
