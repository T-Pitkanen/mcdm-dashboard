import { fetchAuthorByNicUrl } from '@/lib/data.service';
import styles from './page.module.css'
import DevAuthorPortfolio from '@/components/dev/devAuthorPortfolio/devAuthorPortfolio';

export default async function Page({params}) {
  
  let author = await fetchAuthorByNicUrl(params.author)

  return (
    <main className={styles.page} >
      <DevAuthorPortfolio author={author} />
    </main>
  )
}