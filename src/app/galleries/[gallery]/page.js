import styles from './page.module.css'
import { fetchAuthorsByGalleryName } from '@/lib/data.service';
import DevAuthorHero from '@/components/dev/devAuthorHero/devAuthorHero';

export default async function Page({ params }) {
  
  const authors = await fetchAuthorsByGalleryName(params.gallery);

  return (
    <main className={styles.page}>
      {authors.map((author, index) => {
          return <DevAuthorHero key={index} author={author}></DevAuthorHero>
      })}
    </main>
  )
}