const { ApolloServer, gql } = require('apollo-server');

// Schema - Type Definitions
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
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
      return [
        {
          name: 'Product 1',
          description: 'This is product 1',
          quantity: 10,
          price: 10.99,
          onSale: true,
        },
      ];
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
