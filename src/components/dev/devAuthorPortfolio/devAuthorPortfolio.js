import { fetchImagesForAuthor } from '@/lib/data.service';
import styles from './devAuthorPortfolio.module.css';
import DevGalleryImage from '../devGalleryImage/devGalleryImage';

const DevAuthorPortfolio = async ({author}) => {

    const images = await fetchImagesForAuthor(author.author);
    
    return (
        <div className={styles.container}>
            <h1>{author.author}</h1>
            <div className={styles.portfolios}>
                {images.map((image, index) => {
                    return <div className={styles.portfolio} key={index}>
                        <DevGalleryImage image={image} showMeta={false}></DevGalleryImage>
                    </div>
                })}
            </div>
        </div>
    )
};
export default DevAuthorPortfolio