const { ApolloServer, gql } = require('apollo-server');

// Schema - Type Definitions
const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isActive: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'World!';
    },
    numberOfAnimals: () => {
      return 3;
    },
    price: () => {
      return 3.14;
    },
    isActive: () => {
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
