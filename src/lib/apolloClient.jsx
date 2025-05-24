import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://realcloseai.com/graphql", // replace with your WP URL
  cache: new InMemoryCache(),
});

export default client;
