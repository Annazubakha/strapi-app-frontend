"use client";
import { useQuery, gql } from "@apollo/client";
import { useParams, usePathname } from "next/navigation";
import { PostItem } from "./PostItem";
import styles from "../styles/posts/postsList.module.css";

const TAG = gql`
  query GetTag($documentId: ID!) {
    tag(documentId: $documentId) {
      documentId
      name
      posts {
        documentId
        title
        body
        likes
        dislikes
        views
        tags {
          name
          documentId
        }
      }
    }
  }
`;

export default function PostsListByTag() {
  const { slug } = useParams();
  const { data, isLoading } = useQuery(TAG, {
    variables: { documentId: slug },
  });

  if (isLoading) return <p> Loading...</p>;
  return (
    <ul className={styles.list}>
      {data?.tag.posts.map((post) => (
        <PostItem key={post.documentId} post={post} />
      ))}
    </ul>
  );
}
