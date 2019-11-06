import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';

import authLink from './auth';
import {typeDefs} from './local';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
      cache,
      link: authLink.concat(httpLink),
      typeDefs,
      resolvers: {}
  });

  cache.writeData({
    data: {
        authenticated: !!localStorage.getItem('token'),
    },
});

  export default client;