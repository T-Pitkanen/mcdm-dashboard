import CombinedNav from '../portfolioComb.js/portfolioComb';

const Portfolio = ({}) => {
	return (
		<main className={`${styles.page} ${poppinsFont.className}`}>
			<CombinedNav
				galleries={galleries}
				authors={authors}
				onAuthorSelect={setSelectedAuthor} // Passing the function to set selected author
				images={images}
			/>
		</main>
	);
};

export default Portfolio;
