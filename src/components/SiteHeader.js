"use client";
import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
import styles from "../styles/posts/header.module.css";

const TAGS = gql`
  query GetTags {
    tags {
      documentId
      name
    }
  }
`;

export const SiteHeader = () => {
  const { data, isLoading } = useQuery(TAGS);
  if (isLoading) return <p> Loading...</p>;
  console.log(data);
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {data?.tags.map((tag) => (
            <li key={tag.documentId}>
              <Link href={`/tag/${tag.documentId}`}> {tag.name}</Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
