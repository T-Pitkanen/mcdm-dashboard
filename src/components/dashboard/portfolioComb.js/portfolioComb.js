'use client';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import styles from './portfolioComb.module.css';
import Link from 'next/link';

const capitalizeFirstLetter = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1);

const CombinedNav = ({ galleries, authors }) => {
	const [selectedGallery, setSelectedGallery] = useState(null);
	const [selectedAuthor, setSelectedAuthor] = useState(null);

	useEffect(() => {
		const storedGallery = localStorage.getItem('selectedGallery');
		const storedAuthor = localStorage.getItem('selectedAuthor');
		setSelectedGallery(storedGallery || null);
		setSelectedAuthor(storedAuthor || null);
	}, []);

	const handleGalleryClick = (galleryName) => {
		setSelectedGallery(galleryName);
		localStorage.setItem('selectedGallery', galleryName);
		setSelectedAuthor(null);
		localStorage.removeItem('selectedAuthor');
	};

	const handleAuthorClick = (authorName) => {
		setSelectedAuthor(authorName);
		localStorage.setItem('selectedAuthor', authorName);
	};

	const filteredAuthors = selectedGallery
		? authors.filter((author) => author.gallery === selectedGallery)
		: authors;

	return (
		<div className={styles.combinedNav}>
			<div className={styles.navigation}>
				<div className={styles.navbot}>
					{galleries.map((gallery) => (
						<button
							key={gallery.name}
							onClick={() => handleGalleryClick(gallery.name)}
							className={classNames(styles.button, {
								[styles.activeButton]: selectedGallery === gallery.name,
							})}
						>
							{capitalizeFirstLetter(gallery.name)}
						</button>
					))}
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.sidenav}>
					{filteredAuthors.map((author) => (
						<Link
							href={`/dashboard/${selectedGallery}/author/${author.author}`}
							key={author.author}
						>
							<button
								onClick={() => handleAuthorClick(author.author)}
								className={classNames(styles.button, {
									[styles.activeButton]: selectedAuthor === author.author,
								})}
							>
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
