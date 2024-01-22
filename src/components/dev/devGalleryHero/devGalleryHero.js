import Link from "next/link";
import styles from "./devGalleryHero.module.css";
const DevGalleryHero = ({ gallery }) => {
  let url = "/galleries/" + gallery.name;

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
          <Link href={url}>{gallery.name}</Link>
        </h1>
        <p>{gallery.year}</p>
      </div>
    </div>
  );
};

export default DevGalleryHero;
