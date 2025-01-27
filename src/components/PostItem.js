import Link from "next/link";
import styles from "../styles/posts/postItem.module.css";
export const PostItem = ({ post }) => {
  return (
    <li className={styles.card}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.description_wrapper}>
        <p className={styles.description}> {post.body}</p>
        <Link href={`/post/${post.documentId}`} className={styles.read_more}>
          Read more
        </Link>
      </div>
      <ul className={styles.tags}>
        {post.tags.map((tag) => (
          <Link href={`/tag/${tag.documentId}`} key={tag.documentId}>
            {tag.name}
          </Link>
        ))}
      </ul>
    </li>
  );
};
