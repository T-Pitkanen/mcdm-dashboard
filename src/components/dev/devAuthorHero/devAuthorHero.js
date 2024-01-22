import DevDebugJson from '../devDebugJson/devBugJson';
import styles from './devAuthorHero.module.css';
import Link from 'next/link';

const DevAuthorHero = ({author}) => {

    let url = `/galleries/${author.gallery}/${author.niceUrl}`;

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.profile}><div>{author.author.split('')[0]}</div></div>
                    <div className={styles.text}>
                    <Link href={url}>{author.author}</Link>
                        <p>
                            {author.gallery}
                        </p>
                    </div>
                </div>
                
            </div>
            <DevDebugJson content={author}></DevDebugJson>
        </>
    )
};
export default DevAuthorHero