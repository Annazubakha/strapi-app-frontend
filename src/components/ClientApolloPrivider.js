"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function ClientApolloProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
