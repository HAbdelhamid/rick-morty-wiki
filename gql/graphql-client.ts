import {ApolloClient, InMemoryCache, gql} from '@apollo/client'

const graphqlClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
  
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = { results: []}, incoming) {
              return {
                info: incoming.info,
                results: [
                  ...existing.results,
                  ...incoming.results
                ]
              };
            }
          }
        }
      }
    }
  }),
})

export default graphqlClient


