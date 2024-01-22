import DevGalleryHero from "@/components/dev/devGalleryHero/devGalleryHero";
import Link from "next/link";
import { fetchGalleries } from "@/lib/data.service";
import styles from "./page.module.css";

export default async function Page() {
  const galleries = await fetchGalleries();

  return (
    <main className={styles.page}>
      <h1>Portfolie Gallerier</h1>

      {galleries.map((gallery, index) => {
        return <DevGalleryHero key={index} gallery={gallery}></DevGalleryHero>;
      })}
    </main>
  );
}
