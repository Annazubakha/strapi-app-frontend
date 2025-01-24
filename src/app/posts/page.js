import PostsList from "@/components/PostsList";
import styles from "../../styles/posts/page.module.css";

export default function Posts() {
  return (
    <section className={styles.page}>
      <PostsList />
    </section>
  );
}
