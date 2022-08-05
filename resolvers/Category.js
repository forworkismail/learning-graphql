const { productsData } = require('../data');

exports.Category = {
  products: (parent, args, context) => {
    return productsData.filter((product) => product.categoryId === parent.id);
  },
};
