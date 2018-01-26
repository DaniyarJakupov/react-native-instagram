import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new HttpLink({ uri: 'http://localhost:4000/api/graphql' }); // Connect to graphql server
const cache = new InMemoryCache(); // Create cache

export const client = new ApolloClient({
  link,
  cache
});
