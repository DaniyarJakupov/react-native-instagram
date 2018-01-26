import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Platform } from 'react-native';

const url =
  Platform.OS === 'ios' ? 'http://127.0.0.1:4000/api/graphql' : 'http://10.0.2.2:4000/api/graphql';

const link = new HttpLink({ uri: url }); // Connect to graphql server
const cache = new InMemoryCache(); // Create cache

export const client = new ApolloClient({
  link,
  cache
});
