const { ApolloServer } = require('apollo-server');
const { categoriesData, productsData, reviewsData } = require('./data');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Query } = require('./resolvers/Query');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories: categoriesData,
    products: productsData,
    reviews: reviewsData,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
