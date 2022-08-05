const { gql } = require('apollo-server');

// Schema - Type Definitions
exports.typeDefs = gql`
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
