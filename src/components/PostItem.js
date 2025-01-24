import styles from "../styles/posts/postItem.module.css";
export const PostItem = ({ post }) => {
  return (
    <li className={styles.card}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.description}> {post.body}</p>
      <div className={styles.wrapper}>
        <p>
          Likes: <span>{post.likes}</span>
        </p>
        <p>
          Dislikes: <span>{post.dislikes}</span>
        </p>
      </div>
      <div className={styles.views_wrapper}>
        <p className={styles.views}>Views: {post.views}</p>
      </div>
      <ul className={styles.tags}>
        {post.tags.map((tag) => (
          <li key={tag.documentId}>{tag.name}</li>
        ))}
      </ul>
    </li>
  );
};
