import Link from "next/link";

import styles from "../styles/home/page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Hello!</h1>
      <Link href="/posts" className={styles.link}>
        Explore our posts
      </Link>
    </section>
  );
}
