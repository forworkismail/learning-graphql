const { ApolloServer, gql } = require('apollo-server');
const { productsData } = require('./data');

// Schema - Type Definitions
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
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
    product: (parent, { id }, context) => {
      const product = productsData.find((product) => product.id === id);
      if (!product) return null;
      return product;
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
