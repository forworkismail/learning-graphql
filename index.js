const { ApolloServer, gql } = require('apollo-server');
const { productsData } = require('./data');

// Schema - Type Definitions
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'World!';
    },
    products: () => {
      return productsData;
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
