"use client";
import { useQuery, gql } from "@apollo/client";
import { PostItem } from "./PostItem";
import styles from "../styles/posts/postsList.module.css";

const POSTS = gql`
  query GetPosts {
    posts {
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

export default function PostsList() {
  const { data, isLoading } = useQuery(POSTS);
  if (isLoading) return <p> Loading...</p>;

  console.log(data);
  return (
    <ul className={styles.list}>
      {data?.posts.map((post) => (
        <PostItem key={post.documentId} post={post} />
      ))}
    </ul>
  );
}
