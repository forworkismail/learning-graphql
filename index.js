const { ApolloServer, gql } = require('apollo-server');
const { productsData, categoriesData } = require('./data');

// Schema - Type Definitions
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
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
      return productsData.find((product) => product.id === id);
    },
    categories: () => {
      return categoriesData;
    },
    category: (parent, { id }, context) => {
      return categoriesData.find((category) => category.id === id);
    },
  },
  Category: {
    products: (parent, args, context) => {
      return productsData.filter((product) => product.categoryId === parent.id);
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
