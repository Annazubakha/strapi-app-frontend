import { SiteHeader } from "@/components/SiteHeader";
import PostsList from "@/components/PostsList";
import styles from "../../styles/posts/page.module.css";

export default function Posts() {
  return (
    <>
      <SiteHeader />
      <section className={styles.page}>
        <PostsList />
      </section>
    </>
  );
}
