"use client";
import { useParams } from "next/navigation";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/posts/postItemDEtails.module.css";

const POST = gql`
  query GetPost($documentId: ID!) {
    post(documentId: $documentId) {
      documentId
      title
      body
      likes
      dislikes
      views
      tags {
        documentId
        name
      }
    }
  }
`;
export const PostItemDetails = () => {
  const { slug } = useParams();

  const { data, isLoading } = useQuery(POST, {
    variables: { documentId: slug },
  });
  console.log(data);
  if (isLoading) return <p> Loading...</p>;
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{data?.post.title}</h1>
      <div className={styles.description_wrapper}>
        <p className={styles.description}> {data?.post.body}</p>
      </div>
      <div className={styles.wrapper}>
        <p>
          Likes: <span>{data?.post.likes}</span>
        </p>
        <p>
          Dislikes: <span>{data?.post.dislikes}</span>
        </p>
      </div>
      <div className={styles.views_wrapper}>
        <p className={styles.views}>Views: {data?.post.views}</p>
      </div>
      <ul className={styles.tags}>
        {data?.post.tags.map((tag) => (
          <li key={tag.documentId}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};
