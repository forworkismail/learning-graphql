const { productsData, categoriesData } = require('./data');

exports.resolvers = {
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
